<template >
  <div>
  <div id="nav"></div>
  <button id="put_marker" class="btn btn-danger" type="button">MOVE!</button>
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
        },
      },
      mounted() {
        this.init_navigation_elements();
      }
    }
</script>
<style scoped>
</style>
