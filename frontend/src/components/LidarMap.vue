<template >
  <div>
    <div>
      <div id="nav"></div>
      <form>
        <div class="form">
          <div class="col-5">
            <div class="card" v-for="(pose, index) in poses">
              <div class="card-body"  v-bind:class="{background: 'rgb(255, 255, 0)'}">
                {{ index }}
<!--                'rgb(' + colors[index][0] + ', ' + colors[index][1] + ', ' + colors[index][2] +')'-->
                <div class="form-group row">
                  <label class=" col-form-label">description</label>
                  <div class="col-sm-10">
                    <input :id="'ds' + index" type="email" class="form-control"  placeholder="description">
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  <button id="move_btn" class="btn btn-danger" type="button">MOVE!</button>
  <button id="show_poses" class="btn btn-danger" type="button">Call Service save poses!</button>
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
            <h3>Poses</h3>
            <draggable
              class="dragArea list-group"
              :list="poses_list"
              :group="{ name: 'people', pull: 'clone', put: false }"
              :clone="clonePosition"
              @change="log"
            >
              <div class="list-group-item" v-for="element in poses_list" :key="element.id">
                {{ element.description }}
              </div>
            </draggable>
          </div>

          <div class="col">
            <h3>Route</h3>
            <draggable
              class="dragArea list-group"
              :list="route_list"
              group="people"
              @change="log"
            >
              <div class="list-group-item" v-for="element in route_list" :key="element.id">
                {{ element.description }}
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
          navigator: Object,
          nav: null,
          colors: [[230, 25, 75], [60, 180, 75], [255, 225, 25], [0, 130, 200], [245, 130, 48],
            [145, 30, 180], [70, 240, 240], [240, 50, 230], [230, 190, 255]],
          poses_list: [],
          route_list: [],
          saverPose: null,
          moveBtn: null,
          loaderPose: null,
          clearPose: null,
          path: null,
          mode: null,
          poses: [],
          viewer: null
        };
      },
      display: "Custom Clone",
      order: 3,
      components: {
        draggable
      },
      methods: {
        init_navigation_elements() {
          this.saverPose = document.getElementById("show_poses");
          this.moveBtn = document.getElementById("move_btn");
          this.loaderPose = document.getElementById("load_poses");
          this.clearPose = document.getElementById("clear_pose");
          this.path = '/home/ubuntu/max_test_trash/';
          this.mode = document.getElementById("mode");

          let ros = this.$store.getters.GET_ROS;
          this.viewer = new ROS2D.Viewer({
            divID : 'nav',
            width : 600,
            height : 600
          });
          let client = new ROS2D.OccupancyGridClient({
            ros,
            rootObject : this.viewer.scene,
            continuous : true,
            topic : '/map'
          });
          this.navigator = new NAV2D.Navigator({
            ros,
            serverName : '/move_base',
            actionName : 'move_base_msgs/MoveBaseAction',
            rootObject : this.viewer.scene,
            withOrientation : true,
            saverPose: this.saverPose,
            moveBtn: this.moveBtn,
            loaderPose: this.loaderPose,
            clearPose: this.clearPose,
            path: this.path,
            mode: this.mode,
            poses: this.poses
          });
          this.poses_list = this.navigator.waypoint_array.waypoints;
          client.on('change', ()=> {
            this.navigator.ros = ros;
            this.navigator.rootObject = this.viewer.scene;
            // scale the viewer to fit the map
            this.viewer.scaleToDimensions(client.currentGrid.width, client.currentGrid.height);
            this.viewer.shift(client.currentGrid.pose.position.x, client.currentGrid.pose.position.y);
          });
          // this.navigator()
          this.loaderPose.addEventListener('click', ()=> {
            this.clear_map();
            let LoadPose = new ROSLIB.Service({
              ros,
              name: '/load_poses',
              serviceType: 'courier_file_server/LoadPoses'
            });
            let final_path = this.path + document.getElementById("filename").value;
            let request = new ROSLIB.ServiceRequest({
              path :  final_path,
            });
            LoadPose.callService(request, (result)=> {
              this.poses_list = result.waypoints.waypoints;
              this.navigator.poses = [];
              result['waypoints']['waypoints'].forEach((elem) => {
                this.navigator.sendGoal(elem["pose"]);
              })
            })
          });

          this.saverPose.addEventListener('click', () => {
            if (this.poses.length) {
              this.navigator.waypoint_array = [];
              this.poses.forEach((elem, id) => {
                const description = document.getElementById("ds" + id).value;
                const pose = new ROSLIB.Message({
                  position : {
                    x : elem['position']['x'],
                    y : elem['position']['y'],
                    z : elem['position']['z']
                  },
                  orientation : {
                    x : elem['orientation']['x'],
                    y : elem['orientation']['y'],
                    z : elem['orientation']['z'],
                    w : elem['orientation']['w']
                  }
                });
                const waypoint = new ROSLIB.Message({
                  id : id,
                  description : description,
                  pose : pose
                });
                this.navigator.waypoint_array.push(waypoint);
              });
              let SavePose = new ROSLIB.Service({
                ros: ros,
                name: '/save_poses',
                serviceType: 'courier_file_server/SavePoses'
              });
              let pose_arr = new ROSLIB.Message({
                waypoints : this.navigator.waypoint_array
              });
              let final_path = this.path + document.getElementById("filename").value;
              let request = new ROSLIB.ServiceRequest({
                path :  final_path,
                waypoints : pose_arr
              });
              console.log(request, "triangles");
              SavePose.callService(request, (result) => {
                console.log(result);
                this.clear_map();
              })
            }
          });
        },
        log: function(evt) {
          window.console.log(evt);
        },
        clear_map() {
          this.navigator.triangles.forEach((elem) => {
            this.viewer.scene.removeChild(elem);
          });
          this.poses = [];
          this.navigator.waypoint_array = [];
          this.navigator.poses = [];
          this.navigator.triangles = [];
        },
        clonePosition({ id }) {
          console.log(this.poses_list[id]);
          console.log(this.route_list);
          this.route_list.push(this.poses_list[id]);
          return {
            id: id,
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
