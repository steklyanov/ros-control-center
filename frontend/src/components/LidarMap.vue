<template>
    <div id="nav"></div>
</template>

<script>
  // import createjs from "@/public/easeljs.js"
  // import NAV2D from "@/public/nav2d.min"
  // import ROSLIB from "roslib"
  // import ROS2D from "@/public/ros2d.js"
  let createjs = require("createjs");
    export default {
      name: "LidarMap",
      methods: {
        init_nav() {
          let ros = new ROSLIB.Ros({
            url : 'ws://10.0.1.7:9090'
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

          // let ros2dlib = document.createElement('script');
          // ros2dlib.setAttribute('src',"/public/ros2d.js");
          // document.head.appendChild(ros2dlib);
        let create = document.createElement('script');
        create.setAttribute('src',"/public/easeljs.js");
        document.head.appendChild(create);

      },
      mounted() {
        self.init_nav();
      }
    }
  // function
  // init_nav()
</script>

<style scoped>

</style>
