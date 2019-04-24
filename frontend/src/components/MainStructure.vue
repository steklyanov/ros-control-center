<template>
  <div class="wrapper">
      <ul class="nav nav-pills">
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Node</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Topic</a>
        <a class="dropdown-item" href="#">Service</a>
        <a class="dropdown-item" href="#">All</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#">Send present</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Navigation goal</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Send voice message</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">History</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModalCenter"> <!--@click="goPage('settings')"-->Settings</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
    <li class="nav-item">
      <div class="progress" style="width: 80px">
    <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
  </div>
    </li>
  </ul>
    <div class="row">
      <div class=" card col-md-3 order-md-1 mb-4 bg-light">
        <div class="card-header">
          HEADER
        </div>
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
          <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
          <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
          <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
        </div>
      </div>
      <div class="card col-md-9 order-md-2 bg-light">
        <div class="card-header">
          HEADER
        </div>

        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
          <!--            MESSAGE 1 TEMPLATE-->
          <div class="row">
            <div class=" card col-md-8 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                <h4 id="list-item-1">Item 1</h4>
              </div>
              <div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="robot_address">robot IP address</span>
                  </div>
                  <input type="text" class="form-control" placeholder="message" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div id="MessageForm">
                  <label for="MessageForm"> Some topic</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">message</span>
                    </div>
                    <input type="text" class="form-control" placeholder="message" aria-label="Username" aria-describedby="basic-addon1">
                  </div>
                </div>
              </div>
            </div>
            <div class=" card col-md-4 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                Log 1
              </div>
            </div>
          </div>
          <!--MESSAGE 2 TEMPLATE-->
          <div class="row">
            <div class=" card col-md-8 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                <h4 id="list-item-2">Item 2</h4>
              </div>
            </div>
            <div class=" card col-md-4 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                Log 2
              </div>
            </div>
          </div>
          <!--MESSAGE 3 TEMPLATE-->
          <div class="row">
            <div class=" card col-md-8 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                <h4 id="list-item-3">Item 2</h4>
              </div>
            </div>
            <div class=" card col-md-4 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                Log 2
              </div>
            </div>
          </div>
          <!--MESSAGE 4 TEMPLATE-->
          <div class="row">
            <div class=" card col-md-8 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                <h4 id="list-item-4">Item 2</h4>
              </div>
            </div>
            <div class=" card col-md-4 mb-4 bg-light">
              <div>
              </div>
              <div class="card-header">
                Log 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <input type="text" id="ip_address" class="form-control" value="10.0.1.7" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" onclick="change_ip()" data-dismiss="modal" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MainStructure',
  props: {
    msg: String
  },
    methods: {
      goPage(item) {
          this.$router.push({name: item})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .order-md-1 .order-md-2 .order-md-3  a{

  }
  .active {
  }
</style>
