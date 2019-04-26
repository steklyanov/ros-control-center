<template>
  <div>
    <Body></Body>
  </div>
</template>

<script>
  import Body from "../components/Body";
  export default {
    name: "History",
    components: {
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
