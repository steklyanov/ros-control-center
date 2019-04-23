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
      <a class="nav-link" href="#" @click="goPage('settings')">Settings</a>
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
          <div>

          </div>
          <div class="card-header">
                  HEADER
          </div>
      </div>
      <div class="card col-md-6 order-md-2 bg-light">
           <div class="card-header">
                  HEADER
          </div>
          <div>

          </div>
      </div>
      <div class="card col-md-3 order-md-3 mb-4 bg-light">
              <div class="card-header">
                  HEADER
              </div>
      </div>
    </div>
  </div>
</template>

<script>
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