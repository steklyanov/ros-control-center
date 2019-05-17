<template>
    <div id="nav"></div>
</template>

<script>
  import NAV2D from "@/public/nav2d.min"
  import ROSLIB from "roslib"
    export default {
      name: "LidarMap",
      methods: {
        init_nav() {
          let ros = new ROSLIB.Ros({
            url : 'ws://localhost:9090'
          });
          let viewer = new ROS2D.Viewer({
            divID : 'nav',
            width : 350,
            height : 400
          });
          let nav = NAV2D.OccupancyGridClientNav({
            ros : ros,
            rootObject : viewer.scene,
            viewer : viewer,
            serverName : '/pr2_move_base'
          });
        }
      },
      created () {
        self.init_nav();
      },
    }
</script>
<style scoped>

</style>
