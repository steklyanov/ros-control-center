<template lang="pug">
  #nav
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
            width : 350,
            height : 400
          });
          let nav = NAV2D.OccupancyGridClientNav({
            ros,
            rootObject : viewer.scene,
            viewer : viewer,
            serverName : '/pr2_move_base'
          });

          let button = document.getElementById("put_marker");
          let saverPose = document.getElementById("save_poses");
        }
      },
      mounted() {
        this.init_navigation_elements();

      }
    }
</script>
<style scoped>

</style>
