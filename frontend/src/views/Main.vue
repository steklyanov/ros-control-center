<template>
  <div>
    <MainStructure msg="Bla bla bla">

    </MainStructure>
  </div>

</template>

<script>

import MainStructure from '@/components/MainStructure.vue'
import Main from '@/services/Main'

export default {
  name: 'main',
  components: {
    MainStructure,
  },
  async mounted() {
    this.nodes = await Main.get()
    console.log(this.nodes)
  }
}

</script>
