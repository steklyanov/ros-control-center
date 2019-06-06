<template lang="pug">
  #nav
</template>

<script>
  import ROSLIB from "roslib"
  // import createjs from "@/public/createjs.js"
  // console.log(createjs);
  // import ROS2D from "@/public/ros2d.js"
  // import NAV2D from "@/public/nav2d.min"


    export default {
      name: "LidarMap",
      data: function () {
        return {
          poses: [],
          goals: [],
          message: {},
        }
      },
      methods: {
        init_navigation_elements() {
          let ros = this.$store.getters.GET_ROS;
          let viewer = new ROS2D.Viewer({
            divID : 'nav',
            width : 350,
            height : 400
          });
          let nav = NAV2D.OccupancyGridClientNav({
            ros,
            rootObject : viewer.scene,
            viewer : viewer,
            serverName : '/pr2_move_base'
          });

          let button = document.getElementById("put_marker");
          let saverPose = document.getElementById("save_poses");
        },
        async node_parser() {
          this.$store.dispatch("INIT_ROS");
          let node_array = {};
          let ros = this.$store.getters.GET_ROS;
          await getNodeDetail();

          function getNodeDetail() {
            return new Promise((resolve,rej) => {
              let detailClient = new ROSLIB.Service({
                ros,
                name: 'rosapi/nodes',
                serviceType: 'rosapi/Nodes'
              });
              let request = new ROSLIB.ServiceRequest({});
              detailClient.callService(request, async function (result) {
                await splitNodes(result);
                resolve();
              });
            })

            // console.log('out')

          }
          async function splitNodes(result) {
            return  Promise.all(result.nodes.map(item => getTopicDetail(item)))
          }

          function getTopicDetail(item) {
            return new Promise(async (resolve,rej) => {
              let topicDetail = new ROSLIB.Service({
                ros,
                name: 'rosapi/node_details',
                serviceType: 'rosapi/NodeDetails'
              });
              let request =  new ROSLIB.ServiceRequest({
                node : item
              });
              topicDetail.callService(request, async function (result) {
                node_array[item] = result;
                const publishing = result.publishing.map(elem =>  getTopicMessageTypeSub(elem, item));
                const subscribing =  result.subscribing.map(elem => getTopicMessageTypePub(elem, item));
                const services = result.services.map(elem => getServiceMessageType(elem, item));
                await Promise.all([...publishing,...subscribing,...services]);
                resolve();
              });
            })
          }

          function getTopicMessageTypeSub(item, name) {

            return new Promise((resolve,rej) => {
              let messageType = new ROSLIB.Service({
                ros: ros,
                name: 'rosapi/topic_type',
                serviceType: 'rosapi/TopicType'
              });
              // console.log(item, index)
              let request = new ROSLIB.ServiceRequest({
                topic : item
              });
              messageType.callService(request, function (result) {
                node_array[name]['subscribing'][item] = result.type;
                resolve();
              })
            })
          }

          function getServiceMessageType(item, name) {
            return new Promise((resolve,rej) => {
              let messageType = new ROSLIB.Service({
                ros: ros,
                name: 'rosapi/service_type',
                serviceType: 'rosapi/ServiceType'
              });
              let request = new ROSLIB.ServiceRequest({
                service : item
              });
              messageType.callService(request, function (result) {
                node_array[name]['services'][item] = result.type;
                resolve();
              })
            })

          }

          function getTopicMessageTypePub(item, name) {
            return new Promise((resolve,rej) => {
              // console.log(item);
              // console.log(name);
              let messageType = new ROSLIB.Service({
                ros: ros,
                name: 'rosapi/topic_type',
                serviceType: 'rosapi/TopicType'
              });
              let request = new ROSLIB.ServiceRequest({
                topic : item
              });
              messageType.callService(request, function (result) {
                // console.log(result.type);
                node_array[name]['publishing'][item] = result.type;
                resolve();
              })
            })
          }

          this.$store.dispatch("UPDATE_NODES", node_array);
          this.createTable()
        },
        createTable() {
          // this.node_head =  Object.keys(this.$store.getters.GET_NODES);
          let node_list = this.$store.getters.GET_NODES;
          console.log(node_list);
        }
      },
      mounted() {
        this.init_navigation_elements();
        this.node_parser();


      }
    }
</script>
<style scoped>
</style>
