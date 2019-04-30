<template>
  <div>
    <MainStructure>

    </MainStructure>
    <Joystic></Joystic>
  </div>

</template>

<script>

import MainStructure from '@/components/MainStructure.vue'
import Main from '@/services/Main'
// import Joystic from '@/components/Joystic.vue'
import Joystic from "../components/Joystic";

export default {
  name: 'main',
  components: {
    Joystic,
    MainStructure,
  },

  async mounted() {
    try {
      console.log('im on front doing post')
      let ip = this.$store.getters.IP_ADDRESS;
      console.log(ip, 'wow')
      await Main.post({'ip': ip})
    } catch (err) {
      console.log(err)
    }
  },
  async created () {
    console.log('im on front  doing GET')
    await Main.get()
    console.log(this.nodes)
  }
}

</script>
