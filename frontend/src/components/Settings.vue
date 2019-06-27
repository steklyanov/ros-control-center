/* eslint-disable */
<template >
  <div>
    <!-- MODAL-->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">robot IP address</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend"><span class="input-group-text" id="basic-addon3">IP-address</span></div>
              <input class="form-control" id="ip_address" type="text" ref="ip_field" v-bind:placeholder="this.$store.getters.IP_ADDRESS" aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            <button class="btn btn-primary" type="button" data-dismiss="modal" v-on:click="save_settings">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const STORAGE_KEY = 'session-store';
  import Main from '@/services/Main'
    export default {
        name: "Settings",
      created() {
          if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
            this.$store.commit('SET_IP_ADDRESS', JSON.parse(localStorage.getItem(STORAGE_KEY)));
            this.$store.commit('CHANGE_ROS');
          }
          else {
            this.save_settings()
          }
      },
        methods: {
          save_settings() {
              let ip_addres = this.$refs.ip_field.value;
              let str1 = 'ws://';
              let mid = str1.concat(ip_addres);
              let str2 = ':9090';
              let ip = mid.concat(str2);
              localStorage.setItem(STORAGE_KEY, JSON.stringify(ip));
              this.$store.commit('SET_IP_ADDRESS', ip);
              this.$store.commit('CHANGE_ROS');
          },
        }
    }
</script>

<style scoped>

</style>
