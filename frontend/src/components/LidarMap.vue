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
    <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="mode">
        <label class="form-check-label">
          Prohibition mode
        </label>
      </div>
    </div>
    <button id="move_btn" class="btn btn-danger" type="button">MOVE!</button>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Poses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Routes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">{{ $t('Prohibition') }}</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div class="card text-center col-md-8">
          <div class="card-header">
            {{ $t('Pose') }}
          </div>
          <div class="card-body">
            <form>
              <div class="form-row align-items-center">
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">path</div>
                    </div>
                    <input type="text" class="form-control" id="path" placeholder="File Path">
                  </div>
                </div>
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">name</div>
                    </div>
                    <input type="text" id="filename" class="form-control" placeholder="File name">
                  </div>
                </div>
                <div class="col-auto">
                  <button id="save_poses" class="btn btn-danger" type="button">Save</button>
                </div>
                <div class="col-auto">
                  <button id="load_poses" class="btn btn-danger" type="button">Load</button>
                </div>
                <div class="col-auto">
                  <button id="clear_pose" class="btn btn-danger" type="button">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="card text-center col-md-8">
          <div class="card-header">
            Route
          </div>
          <div class="card-body">
            <form>
              <div class="form-row align-items-center">
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">path</div>
                    </div>
                    <input type="text" class="form-control" id="path_route">
                  </div>
                </div>
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">name</div>
                    </div>
                    <input type="text" id="filename_route" class="form-control" placeholder="File name">
                  </div>
                </div>
                <div class="col-auto">
                  <button id="save_route" class="btn btn-danger" type="button">Save</button>
                </div>
                <div class="col-auto">
                  <button id="load_route" class="btn btn-danger" type="button">Load</button>
                </div>
                <div class="col-auto">
                  <button id="clear_route" class="btn btn-danger" type="button">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="card text-center col-md-8">
          <div class="card-header">
            {{ $t('Prohibition') }}
          </div>
          <div class="card-body">
            <form>
              <div class="form-row align-items-center">
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">path</div>
                    </div>
                    <input type="text" class="form-control" id="path_prohibition">
                  </div>
                </div>
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">name</div>
                    </div>
                    <input type="text" id="filename_prohibition" class="form-control" placeholder="File name">
                  </div>
                </div>
                <div class="col-auto">
                  <button id="save_prohibition" class="btn btn-danger" type="button">Save</button>
                </div>
                <div class="col-auto">
                  <button id="load_prohibition" class="btn btn-danger" type="button">Load</button>
                </div>
                <div class="col-auto">
                  <button id="clear_prohibition" class="btn btn-danger" type="button">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
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
          viewer: null,
          active_el: 0,
          polygons: [],
        };
      },
      display: "Custom Clone",
      order: 3,
      components: {
        draggable
      },
      methods: {
        init_navigation_elements() {
          this.saverPose = document.getElementById("save_poses");
          this.moveBtn = document.getElementById("move_btn");
          this.loaderPose = document.getElementById("load_poses");
          this.clearPose = document.getElementById("clear_pose");
          this.saverRoute = document.getElementById("save_route");
          this.clearRoute = document.getElementById("clear_route");
          this.loaderRoute = document.getElementById("load_route");
          this.saverProhibition = document.getElementById("save_prohibition");
          this.clearProhibition = document.getElementById("clear_prohibition");
          this.loaderProhibition = document.getElementById("load_prohibition");
          this.path = '/home/ubuntu/max_test_trash/';
          this.mode = document.getElementById("mode");
          this.polygon_arr = [];

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

          this.saverRoute.addEventListener('click', () => {
            let routes = this.route_list.map((pose) => {
              return pose.id;
            });
            let SaveRoute = new ROSLIB.Service({
              ros,
              name: '/save_route',
              serviceType: 'courier_file_server/SaveRoute'
            });
            let final_path = this.path + document.getElementById("filename_route").value;
            const route_msg = new ROSLIB.Message({
              route : routes
            });
            let request = new ROSLIB.ServiceRequest({
              path :  final_path,
              route : route_msg
            });
            SaveRoute.callService(request, (result)=> {
              console.log(result);
              this.clear_map();
            });
            // console.log(routes)
          });

          this.loaderRoute.addEventListener('click', ()=> {
            this.clear_map();
            let LoadRoute = new ROSLIB.Service({
              ros,
              name: '/load_route_and_poses',
              serviceType: 'courier_file_server/LoadRouteAndPoses'
            });
            let final_path_poses = this.path + document.getElementById("filename").value;
            let final_path_to_route = this.path + document.getElementById("filename_route").value;
            let request = new ROSLIB.ServiceRequest({
              path_to_waypoints :  final_path_poses,
              path_to_route: final_path_to_route
            });
            console.log(request);
            LoadRoute.callService(request, (result)=> {
              console.log(result);
              this.poses_list = result.waypoints.waypoints;
              this.navigator.poses = [];
              result['waypoints']['waypoints'].forEach((elem) => {
                this.navigator.sendGoal(elem["pose"]);
              })
            })
          });

          this.saverProhibition.addEventListener('click', () => {
            let SaveProhibition = new ROSLIB.Service({
              ros,
              name: '/save_prohibition',
              serviceType: 'courier_file_server/SaveProhibition'
            });
            let points = [];
            // let polygon_arr = [];
            this.navigator.new_polygon.forEach((elem) => {
              const point32_msg = new ROSLIB.Message({
                x: elem.x,
                y: elem.y,
                z: elem.z
              });
              points.push(point32_msg);
            });
            // points[points.length] = points[0];
            const polygon_msg = new ROSLIB.Message({
              points: points
            });
            this.polygon_arr.push(polygon_msg);
            const prohibition_msg = new ROSLIB.Message({
              fill_polygons: false,
              polygons: this.polygon_arr
            });
            this.polygons = prohibition_msg;
            console.log(this.polygons);
            let final_path = this.path + document.getElementById("filename_prohibition").value;
            let request = new ROSLIB.ServiceRequest({
              path :  final_path,
              prohibition : prohibition_msg
            });
            console.log(request);
            SaveProhibition.callService(request, (result)=> {
              this.loaderProhibition.click();
            });
          });

          this.loaderProhibition.addEventListener('click', ()=> {
            console.log("Start loading prohibition");
            // this.clear_map();
            let LoadProhibition = new ROSLIB.Service({
              ros,
              name: '/load_prohibition',
              serviceType: 'courier_file_server/LoadProhibition'
            });
            let final_path = this.path + document.getElementById("filename_prohibition").value;
            let request = new ROSLIB.ServiceRequest({
              path :  final_path
            });
            LoadProhibition.callService(request, (result)=> {
              this.polygon_arr = result.prohibition.polygons;
              this.polygons = result.prohibition;
              this.draw_polygons();
            })
          });
        },
        log: function(evt) {
          window.console.log(evt);
        },
        draw_polygons() {
          this.polygons.polygons.forEach((elem) => {
            const polygon = new ROS2D.PolygonMarker({
              lineColor : createjs.Graphics.getRGB(100, 100, 255, 1),
            });

            this.viewer.scene.addChild(polygon);
            elem.points.forEach((point)=> {
              polygon.addPoint(point)
            })
          })
        },
        clear_map() {
          this.navigator.triangles.forEach((elem) => {
            this.viewer.scene.removeChild(elem);
          });
          this.poses = [];
          this.navigator.goals = [];
          this.navigator.waypoint_array = [];
          this.navigator.poses = [];
          this.navigator.triangles = [];
        },
        // clear_prohibition() {
        //   this.navigator.
        // },
        clonePosition({ id }) {
          console.log(this.poses_list[id]);
          console.log(this.route_list);
          this.route_list.push(this.poses_list[id]);
          // return {
          //   id: id,
          // };
        },
        activate:function(el){
          this.active_el = el;
        }
      },
      mounted() {
        this.init_navigation_elements();
      }
    }
</script>
<style scoped>
</style>
