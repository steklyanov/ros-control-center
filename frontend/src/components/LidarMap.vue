<template lang="pug">
  div
    #nav
    button#put_marker.btn.btn-danger(type='button')
      | MOVE!
    button#show_poses.btn.btn-danger(type='button')
      | Call Service save poses
</template>

<script>
  import ROSLIB from "roslib"

    export default {
      name: "LidarMap",
      data: function () {
        return {
          // poses: [],
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
            serverName : '/move_base',
            withOrientation: true,
            continuous : true,
            tfClient   : '/tf'
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
