<template>
  <div class="row my-4">
    <div class="col">
      <div class="d-flex justify-content-center" style="width: 210px; height: 210px;">
        <div id="joystick" ref="joystick"></div>
      </div>
    </div>
  </div>
</template>

<script>
    const ROSLIB = require('roslib');
    import nipplejs from 'nipplejs';
    export default {
        name: "joystic",
        // data: {
        //   // twist: null,
        //   // cmdVel: null
        // },
        methods: {
           moveAction(linear, angular, twist, cmdVel) {

            if (linear !== undefined && angular !== undefined) {
              twist = {
                ...twist,
                linear:{
                  ...twist.linear,
                  x:linear,
                },
                angular:{
                  ...twist.angular,
                  z:angular,
                }
              }

            } else {
              twist.linear.x = 0;
              twist.angular.z = 0;
            }
            console.log({twist});
            cmdVel.publish(twist);
          },
          init_var() {
            let manager;
            let teleop;
            let joystickContainer;
            let publishImmidiately = true;
            // let lid_action = false;
            // Init standard message to operate robot with zero values.

            let twist = new ROSLIB.Message({
              linear: {
                x: 0,
                y: 0,
                z: 0
              },
              angular: {
                x: 0,
                y: 0,
                z: 0
              }
            });
            // Init topic object

            let cmdVel = new ROSLIB.Topic({
              ros: this.$store.getters.GET_ROS,
              name: '/cmd_vel',
              messageType: 'geometry_msgs/Twist'
            });
            // Check if joystick was aready created
            if (manager == null) {
              joystickContainer = document.getElementById('joystick');
              // joystck configuration, if you want to adjust joystick, refer to:
              // https://yoannmoinet.github.io/nipplejs/
              var options = {
                zone: joystickContainer,
                position: {left: 50 + '%', top: 105 + 'px'},
                mode: 'static',
                size: 200,
                color: '#0066ff',
                restJoystick: true
              };
              manager = nipplejs.create(options);
              // event listener for joystick move
              manager.on('move', (evt, nipple) => {
                // nipplejs returns direction is screen coordiantes
                // we need to rotate it, that dragging towards screen top will move robot forward
                var direction = nipple.angle.degree - 90;
                if (direction > 180) {
                  direction = -(450 - nipple.angle.degree);
                }
                var lin = Math.cos(direction / 57.29) * nipple.distance * 0.005;
                var ang = Math.sin(direction / 57.29) * nipple.distance * 0.05;

                if (publishImmidiately) {
                  publishImmidiately = false;

                  this.moveAction(lin, ang, twist, cmdVel);
                  setTimeout(function () {
                    publishImmidiately = true;
                  }, 50);
                }

              });
              // event litener for joystick release, always send stop message
              manager.on('end',  () => {
                this.moveAction(0, 0, twist, cmdVel);
              });
            }
            if (teleop == null) {
              // Initialize the teleop.
              teleop = new KEYBOARDTELEOP.Teleop({
                ros: this.$store.getters.GET_ROS,
                topic: '/cmd_vel'
              });
            }
          },
        },
        mounted() {
            this.init_var();
        },
    }

</script>

<style scoped>

</style>
