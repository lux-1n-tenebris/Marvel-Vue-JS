<template>
  <div id="toolbar">
    <div class="toolbar-style">
      <h3>Marvel</h3>
      <div>
        <router-link :to="{ name: 'Home' }" class="button-style">home</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Bookmarks' }" class="button-style">bookmarks</router-link>
        <!-- <button @click="$router.push('test')">Click to Navigate</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#toolbar {
  background-color: #80cbc4;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  .toolbar-style {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 60px;
    h3 {
      position: absolute;
      left: 0;
      margin: 0 20px;
      color: #f5f5f5;
    }
    div {
      margin-right: 20px;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: #000;
    }
    .button-style {
      padding: 5px 10px;
      background-color: #fff;
      border: 1px solid #eee;
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>
