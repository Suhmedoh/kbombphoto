<template>
  <div id="app">
    <img src="./assets/steve.png">
    <Gallery msg="The World Enders"/>
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue'

export default {
  name: 'app',
  components: {
    Gallery
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Fruktur|Merienda');

    html {
        background: #272727;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #be7b7c;
      background: #272727;
      margin-top: 60px;
    }
    h1 {
        font-family: 'Merienda', cursive;
    }
</style>
