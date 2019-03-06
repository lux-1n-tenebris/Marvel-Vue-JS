<template>
  <div id="welcome">
    <div class="image-layout">
      <img src="@/assets/images/marvel-cinematic.png" alt="">
    </div>
    <Search/>
    <Heroes/>
  </div>
</template>

<script>
import Heroes from '@/components/home/heroes/Heroes'
import Search from '@/components/home/search/Search'

export default {
  components: {
    Heroes,
    Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
#welcome {
  .image-layout {
    z-index: -1;
    position: relative;
    img {
      display: block;
      margin: 0 auto;
      width: 80%;
      position: relative;
      top: -15px;
    }
  }
}
</style>
