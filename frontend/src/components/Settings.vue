/* eslint-disable */
<template>
    <div>
    <!--MODAL -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">robot IP address</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">IP-address</span>
                            </div>
                            <input type="text"  ref="ip_field" id="ip_address" class="form-control" value="10.0.1.7" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button"  data-dismiss="modal" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Main from '@/services/Main'
    export default {
        name: "Settings",
        async mounted() {
          await this.save_settings()
        },
        methods: {
          save_settings() {
            let ip = this.$refs.ip_field.value;
            this.$store.commit('SET_IP_ADDRESS', ip);
            console.log(ip);
            Main.post(ip)
          }
        }
    }
</script>

<style scoped>

</style>
