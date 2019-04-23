<template>
  <div class="main">
    <img alt="ROS logo" src="../assets/ros.png">
    <HelloWorld msg="Main template"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainStructure from '@/components/MainStructure.vue'

export default {
  name: 'main',
  components: {
    MainStructure
  }
}
</script>