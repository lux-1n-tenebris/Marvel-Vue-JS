<template>
  <div id="hero">
    <div class="hero-card">
      <div class="hero-card-inside">
        <div class="hero-card-image"></div>
        <div class="hero-card-title">
          <div class="headline">Iron Man</div>
          <span>Hero ID:</span>
        </div>
        <div class="card-about"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#hero {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  .hero-card {
    display: flex;
    flex-basis: 25%;
    flex-grow: 0;
    max-width: 25%;
    height: 300px;
    position: relative;
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
      }
      .hero-card-title {
        padding-top: 24px;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        padding: 16px;
        .headline {
          text-overflow: ellipsis;
          width: 175px;
          white-space: nowrap;
          overflow: hidden;
          font-size: 24px !important;
          font-weight: 400;
          line-height: 32px !important;
          letter-spacing: normal !important;
          font-family: 'Roboto', sans-serif !important;
        }
      }
    }
  }
}
</style>
