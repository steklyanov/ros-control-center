<template>
  <div>
    <NavBar></NavBar>
    <MainStructure msg="Bla bla bla">

    </MainStructure>
  </div>

</template>

<script>

import MainStructure from '@/components/MainStructure.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'main',
  components: {
    MainStructure,
    NavBar
  }
}

</script>
