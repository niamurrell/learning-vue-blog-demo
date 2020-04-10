<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/Header";
export default {
  name: "App",
  components: {
    "app-header": header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
