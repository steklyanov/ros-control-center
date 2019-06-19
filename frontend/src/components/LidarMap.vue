<template >
  <div>
  <div id="nav"></div>
  <button id="move_btn" class="btn btn-danger" type="button">MOVE!</button>
  <button id="show_poses" class="btn btn-danger" type="button">Call Service save poses!</button>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
    </div>
    <input id="filename" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
  </div>
    <button id="load_poses" class="btn btn-danger" type="button">Load poses!</button>
    <button id="clear_pose" class="btn btn-danger" type="button">Clear poses!</button>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="mode">
      <label class="form-check-label" for="defaultCheck1">
        Default checkbox
      </label>
    </div>
    <div class="row">
      <div class="col-3">
        <h3>Draggable 1</h3>
        <draggable
          class="dragArea list-group"
          :list="list1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          :clone="cloneDog"
          @change="log"
        >
          <div class="list-group-item" v-for="element in list1" :key="element.id">
            {{ element.name }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>Draggable 2</h3>
        <draggable
          class="dragArea list-group"
          :list="list2"
          group="people"
          @change="log"
        >
          <div class="list-group-item" v-for="element in list2" :key="element.id">
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
  import ROSLIB from "roslib"
  import draggable from "vuedraggable";
  let idGlobal = 8;

    export default {
      name: "LidarMap",
      data() {
        return {
          list1: [
            { name: "dog 1", id: 1 },
            { name: "dog 2", id: 2 },
            { name: "dog 3", id: 3 },
            { name: "dog 4", id: 4 }
          ],
          list2: [
            { name: "cat 5", id: 5 },
            { name: "cat 6", id: 6 },
            { name: "cat 7", id: 7 }
          ]
        };
      },
      display: "Custom Clone",
      order: 3,
      components: {
        draggable
      },
      methods: {
        init_navigation_elements() {
          let ros = this.$store.getters.GET_ROS;
          let viewer = new ROS2D.Viewer({
            divID : 'nav',
            width : 600,
            height : 600
          });
          let nav = NAV2D.OccupancyGridClientNav({
            // saverPose: document.getElementById("show_poses"),
            // moveBtn: document.getElementById("move_btn"),
            // loaderPose: document.getElementById("load_poses"),
            // clearPose: document.getElementById("clear_pose"),
            // path: '/home/ubuntu/max_test_trash/',
            ros,
            rootObject : viewer.scene,
            viewer : viewer,
            serverName : '/move_base',
            withOrientation: true,
            continuous : true,
            tfClient   : '/tf'
          });
          // Navigator.testing();
        },
        log: function(evt) {
          window.console.log(evt);
        },
        cloneDog({ id }) {
          console.log("");
          return {
            id: idGlobal++,
            name: `cat ${id}`
          };
        }
      },
      mounted() {
        this.init_navigation_elements();
      }
    }
</script>
<style scoped>
</style>
