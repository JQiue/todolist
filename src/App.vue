<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Main from './views/Main.vue'
import Footer from './views/Footer.vue'
export default {
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#app {
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: #f5f5f5;
}

.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
