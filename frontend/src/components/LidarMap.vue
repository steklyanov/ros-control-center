<template lang="pug">
  div
    #nav
    button#put_marker.btn.btn-danger(type='button')
      | MOVE!
    button#save_poses.btn.btn-danger(type='button')
      | Call Service save poses
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
            width : 600,
            height : 600
          });
          let nav = NAV2D.OccupancyGridClientNav({
            ros,
            rootObject : viewer.scene,
            viewer : viewer,
            serverName : '/pr2_move_base'
          });

          let button = document.getElementById("put_marker");
          let saverPose = document.getElementById("save_poses");
          saverPose.addEventListener("click", () => {
            message['path'] = '/home/ubuntu/max_test_trash/first';
            message['poses'] = poses;

            let SavePoses = new ROSLIB.Service({
              ros : ros,
              name : '/save_poses',
              serviceType : 'save_load_server/SavePoses'
            });
            // let request = new ROSLIB.ServiceRequest(message);
            var v1 = new ROSLIB.Vector3({
              x : 1,
              y : 2,
              z : 3
            });

            var q1 = new ROSLIB.Quaternion({
              x : 0.1,
              y : 0.2,
              z : 0.3,
              w : 0.4
            });
            var p = new ROSLIB.Pose({
              position : v1,
              orientation : q1
            });
            console.log(p);
            let request = new ROSLIB.ServiceRequest({
              path: '/home/ubuntu/max_test_trash/first',
              poses: [
                p,
                p,
                p
              ]
            });
            console.log(request);
            SavePoses.callService(request, function (result) {
              console.log(SavePoses);
              console.log(result);
            });
            console.log(SavePoses);
          });

          function pose_saver() {
            var v1 = new ROSLIB.Vector3({
              x : 1,
              y : 2,
              z : 3
            });

            var q1 = new ROSLIB.Quaternion({
              x : 0.1,
              y : 0.2,
              z : 0.3,
              w : 0.4
            });
            var p = new ROSLIB.Pose({
              position : v1,
              orientation : q1
            });
            console.log(p);
          }
        },
      },
      mounted() {
        this.init_navigation_elements();


      }
    }
</script>
<style scoped>
</style>
