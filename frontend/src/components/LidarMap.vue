<template >
  <div>
  <div id="nav"></div>
  <button id="move_btn" class="btn btn-danger" type="button">MOVE!</button>
  <button id="show_poses" class="btn btn-danger" type="button">Call Service save poses!</button>
<!--  <div class="input-group mb-3">-->
<!--    <div class="input-group-prepend">-->
<!--      <span class="input-group-text" id="inputGroup-sizing-default">File name</span>-->
<!--    </div>-->
<!--    <input id="filename" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">-->
<!--  </div>-->
    <button id="load_poses" class="btn btn-danger" type="button">Load poses!</button>
    <button id="clear_pose" class="btn btn-danger" type="button">Clear poses!</button>
    <div class="card text-center col-md-8">
      <div class="card-header">
        Poses
      </div>
      <div class="card-body">
        <form>
          <div class="form-row align-items-center">
            <div class="col-auto">
              <label class="sr-only" >FILEPATH</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">path</div>
                </div>
                <input type="text" class="form-control" id="path" placeholder="File Path">
              </div>
            </div>
            <div class="col-auto">
              <label class="sr-only">FILENAME</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">name</div>
                </div>
                <input type="text" id="filename" class="form-control" placeholder="File name">
              </div>
            </div>
            <div class="col-auto">
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="mode">
                <label class="form-check-label">
                  Prohibition mode
                </label>
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="card text-center col-md-8">
      <div class="card-header">
        Route
      </div>
      <div class="card-body">
        <form>
          <div class="form-row align-items-center">
            <div class="col-auto">
              <label class="sr-only" >FILEPATH</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">path</div>
                </div>
                <input type="text" class="form-control" id="path_route" placeholder="File Path">
              </div>
            </div>
            <div class="col-auto">
              <label class="sr-only">FILENAME</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">name</div>
                </div>
                <input type="text" id="filename_route" class="form-control" placeholder="File name">
              </div>
            </div>
            <div class="col-auto">
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck_route">
                <label class="form-check-label" >
                  Prohibition mode
                </label>
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card text-center col-md-8">
      <div class="card-header">
        Drag&Drop
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
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

          <div class="col">
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
          ],
          navigator: Object,
          nav: null,
          colors: [[230, 25, 75], [60, 180, 75], [255, 225, 25], [0, 130, 200], [245, 130, 48],
            [145, 30, 180], [70, 240, 240], [240, 50, 230], [230, 190, 255]],
          poses_list: Array,
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
          // let navigator = null;
          let viewer = new ROS2D.Viewer({
            divID : 'nav',
            width : 600,
            height : 600
          });
          // let nav = "qwerty";
          // console.log(nav);
          this.nav = NAV2D.OccupancyGridClientNav({
            // saverPose: document.getElementById("show_poses"),
            // moveBtn: document.getElementById("move_btn"),
            // loaderPose: document.getElementById("load_poses"),
            // clearPose: document.getElementById("clear_pose"),
            // path: '/home/ubuntu/max_test_trash/',
            ros,
            rootObject : viewer.scene,
            viewer     : viewer,
            serverName : '/move_base',
            withOrientation: true,
            continuous : true,
            tfClient   : '/tf',
            navigator  : this.navigator
          });
          this.poses_list = this.nav.navigator.rootObject.children.splice(0, 3);
        },
        log: function(evt) {
          window.console.log(evt);
        },
        cloneDog({ id }) {
          console.log(this.poses_list);
          console.log(this.nav.navigator, "qwerty");
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
