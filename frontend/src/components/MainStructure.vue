<template>
  <div class="wrapper">
    <button v-on:click="createTable"> UPDATE</button>
    <div class="row">
      <div class=" card col-md-3 order-md-1 mb-4 bg-light">
        <div class="card-header">
          HEADER
        </div>
<!--        <div id="list-example" class="list-group" v-for="(nodes, array) in this.$store.getters.GET_NODES">-->
        <div v-if="node_head.length">
<!--          STABLE RESULT -->
          <div id="list-example" class="list-group" v-for="key in this.node_head" v-bind:key="key">
            <a class="list-group-item list-group-item-action" href="#list-item-1">{{ key }}</a>
          </div>
        </div>
        <div v-else>
          loading...
        </div>
      </div>
      <div class="card col-md-9 order-md-2 bg-light">
<!--        <div class="card-header">-->
<!--          HEADER-->
<!--        </div>-->

        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
          <div v-for="(list, obj) in this.node_list">
            <h4> {{ obj }} </h4>
            <div v-for="(value, name) in list" >
              <h2></h2>
              <div>
                <div class="row">
                  <div class=" card col-md-8 mb-4 bg-light">
                    <div class="card-header">
                      {{name }}
                    </div>
                    <div>
                      <div v-for="(topic, name) in value">
                        <div class="card">
                          <div class="card-header">
                            {{ topic }}
                          </div>
                          <div class="card-body">
                            <form>
                              {{ name }} >>>1
                              <div class="form-row align-items-center">

                                <!--                    V-FOR for message inf, float, etc...-->

                                <div>
                                  {{ name.value }}
                                  <div class="col-auto">
                                    <label class="sr-only" for="inlineFormInputGroup">Default</label>
                                    <div class="input-group mb-2">
                                      <div class="input-group-prepend">
                                        <div class="input-group-text">Input value</div>
                                      </div>
                                      <input type="text" class="form-control" id="" placeholder="Topic">
                                    </div>
                                  </div>
                                </div>

                                <div class="col-auto">
                                  <button type="submit" class="btn btn-primary mb-2">Publish</button>
                                </div>
                              </div>
                            </form>
                          </div>
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
  data: function () {
    return {
      node_list: [],
      node_head: {}
    }
  },
    methods: {
      goPage(item) {
          this.$router.push({name: item})
      },
       async getData() {
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
              resolve();
            })
          })
        }

        this.$store.dispatch("UPDATE_NODES", node_array);
        this.createTable()
        // await console.log(this.$store.getters.GET_NODES);
        // await console.log(this.$store.dispatch("UPDATE_NODES", node_array));
        // callback();
      },
      createTable() {
        this.node_head =  Object.keys(this.$store.getters.GET_NODES);
        this.node_list = this.$store.getters.GET_NODES;
        console.log(this.node_list);
        // console.log(this.node_list);
        let ros = this.$store.getters.GET_ROS;
        console.log(ros);


        ros.getMessageDetails('/battery_level', function (data) {
          console.log(data, "ssssss");
        }, function (error) {
          console.log(error);
        })




        // let messageType = new ROSLIB.Service({
        //   ros: ros,
        //   name: 'rosapi/message_details',
        //   serviceType: 'rosapi/MessageDetails'
        // });
        // let request = "roscpp/GetLoggers";
        // console.log(request);
        // messageType.callService(request, function (result) {
        // }, function (error) {
        //   console.log(error);
        // });
        // console.log(messageType);
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
