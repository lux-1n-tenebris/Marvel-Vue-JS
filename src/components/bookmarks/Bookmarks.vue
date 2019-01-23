<template>
  <div id="bookmarks">
  <div class="image-layout">
    <img src="@/assets/images/marvel-banner.jpg" alt="">
  </div>
  <BookmarkedHeroes/>
  </div>
</template>

<script>
import BookmarkedHeroes from '@/components/bookmarks/bookmarked-heroes/BookmarkedHeroes'

export default {
  components: {
    BookmarkedHeroes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
#bookmarks {
  .image-layout {
    z-index: -1;
    position: relative;
    img {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
