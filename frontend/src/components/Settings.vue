/* eslint-disable */
<template lang="pug">
  div
    // MODAL
    #exampleModalCenter.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalCenterTitle', aria-hidden='true')
      .modal-dialog.modal-dialog-centered(role='document')
        .modal-content
          .modal-header
            h5#exampleModalCenterTitle.modal-title robot IP address
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            .input-group.mb-3
              .input-group-prepend
                span#basic-addon3.input-group-text IP-address
              input#ip_address.form-control(type='text', ref='ip_field', v-bind:placeholder='this.$store.getters.IP_ADDRESS', aria-describedby='basic-addon1')
          .modal-footer
            button.btn.btn-secondary(type='button', data-dismiss='modal') Close
            button.btn.btn-primary(type='button', data-dismiss='modal', v-on:click='save_settings') Save changes

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
