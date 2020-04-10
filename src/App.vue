<template>
  <div id="app">
    <AddBlog />
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";

export default {
  name: "App",
  components: {
    AddBlog
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
</style>
