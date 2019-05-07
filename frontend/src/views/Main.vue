<template>
  <div>
    <MainStructure>

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
    try {
    } catch (err) {
      console.log(err)
    }
  },
  async created () {
    // el: '#navbar',
    //   data: all_data
  }
}

</script>
