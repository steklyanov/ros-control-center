<template>
  <ul class="list-group" v-for="(node, index) in nodes">
    <li class="list-group-item">{{ node }}</li>

  </ul>
</template>

<script>
  import Test from '@/services/Test'
    export default {
        name: "Test",
      data() {
          return {
            nodes: []
          }
      },
      methods: {
          async getNodes() {
            const response = await Test.fetchNodes()
            this.nodes = response.data.nodes
          }
      },
      mounted() {
          this.getNodes()
      }
    }
</script>

<style scoped>

</style>
