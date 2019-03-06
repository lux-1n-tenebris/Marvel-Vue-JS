<template>
  <div class="bookmarked-heroes">
    <div class="hero-card">
      <div class="hero-card-inside">
        <div class="hero-card-image">
          <img :src="`${ heroB.thumbnail.path }.${ heroB.thumbnail.extension }`" class="image-fix">
        </div>
        <div class="hero-card-title">
          <div class="headline">{{ heroB.name }}</div>
          <span>Hero ID: {{ heroB.id }}</span>
        </div>
        <div class="hero-card-description">
          <div class="btn-wrap">
            <button v-if="heroB.description" @click="toggleDescription(heroB)" class="btn-hero">
              <i class="material-icons" :class="[ isActive ? 'unActive' : 'active' ]">keyboard_arrow_down</i>
            </button>
            <!-- <button @click="removeThisHero" class="btn-hero">
              <i class="material-icons">clear</i>
            </button> -->
          </div>
          <div v-show="currentHero && currentHero.id === heroB.id" class="hero-card-about">
            <p>{{ heroB.description }}</p>
          </div>
          <div class="non-description-fix" v-if="!heroB.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  props: ['heroB'],
  data () {
    return {
      currentHero: null,
      isActive: !false,
    }
  },
  methods: {
    // ...mapActions(['emptyBookmarks']),
    // removeThisHero(){
    //   this.emptyBookmarks({
    //     name: '',
    //     id: null,
    //     description: '',
    //     thumbnail: {
    //       path: '',
    //       extension: ''
    //     }
    //   });
    //   this.setLocalBookmarks();
    // },
    toggleDescription (heroB) {
      if (!this.currentHero || this.currentHero.id !== heroB.id) {
        this.currentHero = heroB
        this.isActive = false
        this.isBookmarked
      } else {
        this.currentHero = null
        this.isActive = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bookmarked-heroes {
  // background-color: #eee;
  text-align: center;
  .hero-card {
    .hero-card-inside {
      width: 300px;
      margin-top: 20px;
      background-color: #fff;
      border-color: #fff;
      color: rgba(0,0,0,0.87);
      display: block;
      border-radius: 2px;
      min-width: 0;
      position: relative;
      text-decoration: none;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
      .hero-card-image {
        height: 300px;
        width: 300px;
        position: relative;
        overflow: hidden;
        flex: 1 0 auto;
        display: flex;
        z-index: 0;
        background-size: cover;
        .image-fix {
          width: 100%;
        }
      }
      .hero-card-title {
        padding-top: 24px;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        padding: 16px;
        .headline {
          text-overflow: ellipsis;
          width: 300px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          font-size: 21px !important;
          font-weight: 400;
          line-height: 32px !important;
          letter-spacing: normal !important;
          font-family: 'Roboto', sans-serif !important;
        }
      }
      .hero-card-description {
        .btn-wrap {
          display: flex;
          justify-content: flex-end;
          .unActive {
            transform: rotate(0deg)
          }
          .active {
            transform: rotate(180deg)
          }
          .bookmarked {
            color: green;
          }
          .btn-hero {
            padding: 5px 10px;
            margin: 5px 5px;
            background-color: #fff;
            border: 1px solid #eee;
            outline: none;
            cursor: pointer;
            // box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
            &:hover {
              background-color: #eee;
            }
          }
        }
        .hero-card-about {
          text-overflow: ellipsis;
          width: 280px;
          margin: 0 auto;
          overflow: hidden;
          font-weight: 400;
          line-height: 22px !important;
          letter-spacing: normal !important;
          font-family: 'Roboto', sans-serif !important;
        }
        .non-description-fix {
          height: 47px;
        }
      }
    }
  }
}
</style>
