<template>
  <div id="heroes">
    <Hero/>
  </div>
</template>

<script>
import Hero from '../hero/Hero'

export default {
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
#heroes {
  background-color: #fff;
  margin-bottom: 50px;
}
</style>

