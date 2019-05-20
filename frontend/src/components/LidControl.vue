<template>
  <div>
    <button v-on:click="lidControl(1)" type="button" class="btn btn-primary btn-lg">Открыть крышку</button>
    <button v-on:click="lidControl(0)" type="button" class="btn btn-primary btn-lg">Закрыть крышку</button>
  </div>
</template>

<script>
  const ROSLIB = require('roslib');
    export default {
        name: "LidControl",
      data: function () {
        return {
          lid_action: false
        }
      },
      methods: {
        lidControl(action) {
          console.log(action);
          var LidControl = new ROSLIB.Service({
            ros : this.$store.getters.GET_ROS,
            name : '/dynamixel_control_srv',
            serviceType : 'action_dynamixel/dynamixel_control'
          });
          var request = new ROSLIB.ServiceRequest({
            command : Boolean(action)
          });
          LidControl.callService(request, function(result) {
            console.log('Открыть крышку');
          });
        }
      }
    }
</script>
<style scoped>
</style>
