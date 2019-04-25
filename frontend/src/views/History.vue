<template>
  <div>
    <NavBar></NavBar>
    <Body></Body>
  </div>
</template>

<script>
  import NavBar from "../components/NavBar";
  import Body from "../components/Body";
  export default {
    name: "History",
    components: {
      NavBar,
      Body
    },
    data: function () {
      return {
        left_column_name: "Here i am"
      }
    }
  }
</script>


<style scoped>

</style>
