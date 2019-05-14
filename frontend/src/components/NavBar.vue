<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">ROS control center</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" @click="goPage('main')" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Node
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Topic</a>
              <a class="dropdown-item" href="#">Service</a>
              <a class="dropdown-item" href="#">All</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goPage('navigation')" href="#">Navigation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goPage('voice_control')" href="#">Voice control</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goPage('history')" href="#">History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goPage('hand_control')" href="#">Hand control</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#exampleModalCenter" href="#">Settings</a>
          </li>
        </ul>
        <span class="navbar-text">
          <div class="progress" style="width: 100px; height: 25px">
            <div class="progress-bar" role="progressbar" style="width: 60%;"
                 aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">{{ this.batteryStatus}}</div>
          </div>
        </span>
      </div>
    </nav>
    <Settings/>
  </div>
</template>

<script>
    const ROSLIB = require('roslib');
    import Settings from "../components/Settings";
    export default {
      name: "NavBar",
      components: {
        Settings
      },
      data: function () {
        return {
          batteryStatus: 1.3,
        }
      },
      mounted () {
        this.set_battery();
      },
      methods: {
          goPage(item) {
            this.$router.push({name: item})
          },
          isActive: function (menuItem) {
            return this.activeItem === menuItem
          },
          setActive: function (menuItem) {
            this.activeItem = menuItem // no need for Vue.set()
          },
          async set_battery() {
            let ros = this.$store.getters.GET_ROS;
            console.log(ros);
            let batteryTopic = new ROSLIB.Topic({
              ros,
              name: '/battery_level',
              messageType: 'std_msgs/Float32'
            });
            batteryTopic.subscribe(message => {
              console.log(message.data);
              this.batteryStatus = Math.round(message.data * 1000) / 1000;
            })
          }
      }
    }
</script>
<style scoped>
</style>
