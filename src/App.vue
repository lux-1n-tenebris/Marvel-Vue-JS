<template>
  <div id="app">
    <Toolbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Toolbar from './components/helpers/toolbar/Toolbar'
import Footer from './components/helpers/footer/Footer'

export default {
  name: 'app',
  components: {
    Toolbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
