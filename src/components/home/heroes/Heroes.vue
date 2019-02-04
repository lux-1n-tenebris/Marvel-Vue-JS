<template>
  <div id="heroes">
    <Hero v-for="h in heroes" :key="h.id" :heroes="h" class="hero-card"></Hero>
  </div>
</template>

<script>
import Hero from './hero/Hero'
import { mapGetters } from "vuex";

export default {
  components: {
    Hero
  },
  computed: {
    ...mapGetters(['heroes'])
  }
}
</script>

<style lang="scss" scoped>
#heroes {
  background-color: #fff;
  width: 80%;
  margin: 0 auto 70px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  .hero-card {
    display: flex;
    // flex-basis: 25%;
    flex-grow: 0;
    margin: 0 5px;
    // max-width: 25%;
    position: relative;
  }
}
</style>

