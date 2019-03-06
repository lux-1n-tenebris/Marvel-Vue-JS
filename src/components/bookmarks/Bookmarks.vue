<template>
  <div id="bookmarks">
  <div class="image-layout">
    <img src="@/assets/images/marvel-banner.jpg" alt="">
  </div>
  <div class="bookmarked-heroes">
    <BookmarkedHeroes v-for="heroB in bookmarkedHeroes" :key="heroB.id" :heroB="heroB" class="hero-card"></BookmarkedHeroes>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BookmarkedHeroes from '@/components/bookmarks/bookmarked-heroes/BookmarkedHeroes'

export default {
  components: {
    BookmarkedHeroes
  },
  methods: {
    ...mapActions(['getBookmarks'])
  },
  created() {
    this.getBookmarks();
  },
  computed: {
  ...mapGetters(['bookmarkedHeroes'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
#bookmarks {
  width: 80%;
  margin: 0 auto 70px auto;
  .image-layout {
    z-index: -1;
    position: relative;
    img {
      display: block;
      margin: 0 auto;
      width: 80%;
    }
  }
  .bookmarked-heroes {
    margin: 40px 0;
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
}
</style>
