<template>
  <div class="wrapper">
    <button v-on:click="createTable"> UPDATE</button>
    <div class="row">
      <div class=" card col-md-3 order-md-1 mb-4 bg-light">
        <div class="card-header">
          HEADER
        </div>
<!--        <div id="list-example" class="list-group" v-for="(nodes, array) in this.$store.getters.GET_NODES">-->
        <div id="list-example" class="list-group" v-for="(nodes, array) in this.node_name">
          <a class="list-group-item list-group-item-action" href="#list-item-1">{{ array }}</a>
        </div>
      </div>
      <div class="card col-md-9 order-md-2 bg-light">
        <div class="card-header">
          HEADER
        </div>

        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
          <!--            MESSAGE 1 TEMPLATE-->
          <div class="row">
            <div class=" card col-md-8 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                <h4 id="list-item-1">Item 1</h4>
              </div>
              <div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="robot_address">robot IP address</span>
                  </div>
                  <input type="text" class="form-control" placeholder="message" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div id="MessageForm">
                  <label for="MessageForm"> Some topic</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">message</span>
                    </div>
                    <input type="text" class="form-control" placeholder="message" aria-label="Username" aria-describedby="basic-addon1">
                  </div>
                </div>
              </div>
            </div>
            <div class=" card col-md-4 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                Log 1
              </div>
            </div>
          </div>
          <!--MESSAGE 2 TEMPLATE-->
          <div class="row">
            <div class=" card col-md-8 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                <h4 id="list-item-2">Item 2</h4>
              </div>
            </div>
            <div class=" card col-md-4 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                Log 2
              </div>
            </div>
          </div>
          <!--MESSAGE 3 TEMPLATE-->
          <div class="row">
            <div class=" card col-md-8 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                <h4 id="list-item-3">Item 2</h4>
              </div>
            </div>
            <div class=" card col-md-4 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                Log 2
              </div>
            </div>
          </div>
          <!--MESSAGE 4 TEMPLATE-->
          <div class="row">
            <div class=" card col-md-8 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                <h4 id="list-item-4">Item 2</h4>
              </div>
            </div>
            <div class=" card col-md-4 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                Log 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">robot IP address</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">IP-address</span>
              </div>
              <input type="text" id="ip_address" class="form-control" value="10.0.1.7" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" onclick="change_ip()" data-dismiss="modal" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const ROSLIB = require('roslib');
export default {
  name: 'MainStructure',
  props: {
    msg: String
  },
  data: {
      // node_name: this.$store.getters.GET_NODES,
  },
    methods: {
      goPage(item) {
          this.$router.push({name: item})
      },
      getData() {
        this.$store.dispatch("INIT_ROS");
        let node_array = {};
        let ros = this.$store.getters.GET_ROS;
        getNodeDetail();
        function getNodeDetail() {
          let detailClient = new ROSLIB.Service({
            ros: ros,
            name: 'rosapi/nodes',
            serviceType: 'rosapi/Nodes'
          });
          let request = new ROSLIB.ServiceRequest({});
          detailClient.callService(request, function (result) {
            splitNodes(result);
          });
        }
        function splitNodes(result) {
          // console.log(result.nodes);
          result.nodes.forEach(function (item) {
            getTopicDetail(item);
          })
        }

        function getTopicDetail(item) {
          let topicDetail = new ROSLIB.Service({
            ros: ros,
            name: 'rosapi/node_details',
            serviceType: 'rosapi/NodeDetails'
          });
          let request = new ROSLIB.ServiceRequest({
            node : item
          });

          topicDetail.callService(request, function (result) {
            node_array[item] = result;
            result.publishing.forEach(function (elem) {
              getTopicMessageTypeSub(elem, item)
            });
            result.subscribing.forEach(function (elem) {
              getTopicMessageTypePub(elem, item)
            });
            result.services.forEach(function (elem) {
              getServiceMessageType(elem, item)
            })
          })
        }

        function getTopicMessageTypeSub(item, name) {
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
          })

        }

        function getServiceMessageType(item, name) {
          let messageType = new ROSLIB.Service({
            ros: ros,
            name: 'rosapi/service_type',
            serviceType: 'rosapi/ServiceType'
          });
          // console.log(item, index)
          let request = new ROSLIB.ServiceRequest({
            service : item
          });
          messageType.callService(request, function (result) {
            node_array[name]['services'][item] = result.type;
          })

        }

        function getTopicMessageTypePub(item, name) {
          let messageType = new ROSLIB.Service({
            ros: ros,
            name: 'rosapi/topic_type',
            serviceType: 'rosapi/TopicType'
          });
          let request = new ROSLIB.ServiceRequest({
            topic : item
          });
          messageType.callService(request, function (result) {
            node_array[name]['publishing'][item] = result.type;
          })
        }
        this.$store.dispatch("UPDATE_NODES", node_array);
        // await console.log(this.$store.getters.GET_NODES);
        // await console.log(this.$store.dispatch("UPDATE_NODES", node_array));
        // callback();
      },
      async createTable()
      {
        // console.log(this.$store.getters.GET_NODES);
        let array =  await this.$store.getters.GET_NODES;
        // await console.log(this.$store.getters.GET_NODES);
        await console.log(array, 'kkk');
        this.node_name = array;
        await console.log(this.node_name, 'ttt');
        for (let arr in array)
        {
          console.log(arr);
          for (let topics in arr)
            console.log(topics);
          // this.node_name = arr;
        }
      }
    },
  mounted() {
    this.getData()
  }
}
// this.getData()

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .order-md-1 .order-md-2 .order-md-3  a{

  }
  .active {
  }
</style>
