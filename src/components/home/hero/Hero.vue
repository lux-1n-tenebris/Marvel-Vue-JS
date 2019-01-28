<template>
  <div class="hero">
    <div class="hero-card">
      <div class="hero-card-inside">
        <div class="hero-card-image">
          <img :src="`${ heroes.thumbnail.path }.${ heroes.thumbnail.extension }`" class="image-fix">
        </div>
        <div class="hero-card-title">
          <div class="headline">{{ heroes.name }}</div>
          <span>Hero ID: {{ heroes.id }}</span>
        </div>
        <div v-if="heroes.description" class="hero-card-description">
          <div class="button-fix">
            <button @click="toggleDescription(heroes)" class="btn-hero-description"><i class="material-icons">keyboard_arrow_down</i></button>
            <button class="btn-hero-description"><i class="material-icons">bookmark_border</i></button>
          </div>
          <div v-show="currentHero && currentHero.id === heroes.id" class="hero-card-about">
            <p>{{ heroes.description }}</p>
          </div>
        </div>
        <div v-else class="hero-card-empty-description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['heroes'],
  data () {
    return {
      currentHero: null
    }
  },
  methods: {
    toggleDescription (heroes) {
      if (!this.currentHero || this.currentHero.id !== heroes.id) {
        this.currentHero = heroes
      } else {
        this.currentHero = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  // width: 80%;
  // margin: 0 auto;
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;

  .hero-card {
    // display: flex;
    // flex-basis: 25%;
    // flex-grow: 0;
    // max-width: 25%;
    // position: relative;
    .hero-card-inside {
      width: 250px;
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
        height: 250px;
        width: 250px;
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
          width: 200px;
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
        .button-fix {
          display: flex;
          justify-content: flex-end;
          .btn-hero-description {
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
          width: 220px;
          margin: 0 auto;
          overflow: hidden;
          font-weight: 400;
          line-height: 22px !important;
          letter-spacing: normal !important;
          font-family: 'Roboto', sans-serif !important;
        }
      }
      .hero-card-empty-description {
        height: 45px;
      }
    }
  }
}
</style>
