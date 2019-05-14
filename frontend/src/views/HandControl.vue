<template>
  <div>

    <Joystic></Joystic>
<!--    <button v-on:click="this.lidControl" id="lid_control" >LID Contol</button>-->
    <LidControl/>
  </div>
</template>

<script>
    const ROSLIB = require('roslib');
    import Joystic from '@/components/Joystic.vue'
    import LidControl from '@/components/LidControl.vue'
    export default {
        name: "HandControl",
      data: function () {
        return {
          lid_action: false
        }
      },
        components: {
          LidControl,
          Joystic
        },
      methods: {
          lidControl() {
            this.lid_action = !this.lid_action;
            lid_control(this.lid_action);
            const btn = document.querySelector('#lid_control');
            if (btn.classList.contains('btn-primary')) {
              btn.classList.add('btn-success');
              btn.classList.remove('btn-primary');
              btn.innerHTML = "Закрыть крышку";
            } else {
              btn.classList.add('btn-primary');
              btn.classList.remove('btn-success');
              btn.innerHTML = "Открыть крышку";
            }
            function lid_control(action) {
              console.log(this.lid_action);
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
          },
      }
    }
</script>

<style scoped>

</style>
