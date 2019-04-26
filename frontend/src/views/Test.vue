<template>
  <div>
    <ul class="list-group" v-for="(node, index) in nodes">
      <li class="list-group-item">{{ node }} {{ index }}</li>

    </ul>
  </div>

</template>

<script>
  import Test from '@/services/Test'
    export default {
      data () {
        return {
          nodes: null
        }
      },
      name: "Test",
      async mounted () {
        this.nodes = await Test.index()
        console.log(this.nodes)
      }

    }
</script>

<style scoped>

</style>
