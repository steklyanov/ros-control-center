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
  </div>
</template>

<script>
  import ROSLIB from "roslib"

    export default {
      name: "LidarMap",
      // data: function () {
      //   return {
      //     teleop: null,
      //   }
      // },
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
        },
        initTeleopKeyboard() {
          let teleop;
          // Use w, s, a, d keys to drive your robot
          // Check if keyboard controller was aready created
          if (this.teleop == null) {
            console.log("im here");
            // Initialize the teleop.
            this.teleop = new KEYBOARDTELEOP.Teleop({
              ros: this.$store.getters.GET_ROS,
              topic: '/cmd_vel'
            });
          }
        }
      },
      mounted() {
        this.init_navigation_elements();
        // this.initTeleopKeyboard();
      }
    }
</script>
<style scoped>
</style>
