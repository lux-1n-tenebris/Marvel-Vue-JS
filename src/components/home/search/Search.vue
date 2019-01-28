<template>
  <div id="search">
    <div class="input-group">
      <input type="text" value="" required v-model="name"><span class="bar"></span>
      <label>Pick a hero</label>
      <span class="beneath">For example, Iron Man, Thor, Hulk</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      name: '',
      timeout: null
    }
  },
  watch: {
    name: function(name) {
    if (!this.timeout) {
        this.timeout = setTimeout(() => {
        this.fetchHeroes({ name });
        }, 500);
    } else {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
        this.fetchHeroes({ name });
        }, 500);
    }
    }
  },
  methods: {
    ...mapActions(['fetchHeroes'])
  },
}
</script>

<style lang="scss" scoped>
#search {
  width: 380px;
	margin: 2em auto;
	padding: 2em 2em 2em 2em;
  font-family: Helvetica;
  * {
    box-sizing: border-box;
  }
  .input-group {
    position: relative;
    margin-bottom: 45px;
    input {
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      -webkit-appearance: none;
      display: block;
      background: #fafafa;
      color: #636363;
      width: 100%;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid #c5c4c4;
      &:focus {
        outline: none;
        border:none;
      }
      // &:focus ~ label, input.used ~ label {
      //   top: -20px;
      //   transform: scale(.75);
      //   left: -10px;
      // }
      &:focus ~ .beneath, input.used ~ .beneath {
        top: 45px;
        z-index: 0;
      }
      &:focus ~ .bar:before { width: 50%; }
      &:focus ~ .bar:after { width: 50%; }
    }
    .bar {
      position: relative;
      display: block;
      width: 100%;
      &:before, &:after {
        content: '';
        height: 1px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #80cbc4;
        transition: all 0.5s ease-in-out;
      }
      &:before { left: 50%; }
      &:after { right: 50%; }
    }
    label {
      color: #999;
      font-size: 14px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      // left: 5px;
      top: -20px;
      // transition: all 0.2s ease;
    }
    .beneath {
      font-size: 12px;
      color: #999;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      top: 25px;
      z-index: -1;
      transition: all 0.5s ease;
    }
  }
}
</style>
