<template>
    <div id="nav"></div>
</template>

<script>
  import ROSLIB from "roslib"
  // import createjs from "@/public/createjs.js"
  // console.log(createjs);
  // import ROS2D from "@/public/ros2d.js"
  // import NAV2D from "@/public/nav2d.min"


    export default {
      name: "LidarMap",
      methods: {
        init_nav() {

        }
      },
      mounted() {
        // var scriptTag2 = document.createElement("script");
        // scriptTag2.src = "https://static.robotwebtools.org/ros2djs/current/ros2d.js";
        // scriptTag2.id = "ros2d";
        // document.getElementsByTagName('head')[0].appendChild(scriptTag2);

        // self.init_nav();
        console.log("started");
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
    }
</script>
<style scoped>

</style>
