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
      console.log('im on front doing post')
      let ip = this.$store.getters.IP_ADDRESS;
      console.log(ip, 'wow')
      await Main.post({'ip': ip}).then(request => {
        all_data = request.data;
      })
    } catch (err) {
      console.log(err)
    }
  },
  async created () {
    console.log('im on front  doing GET')
    await Main.get()
    console.log(this.nodes)
    // el: '#navbar',
    //   data: all_data
  }
}

</script>
