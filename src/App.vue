<template>
  <div id="app">
    <ShowBlogs />
    <ListBlogs />
  </div>
</template>

<script>
// import AddBlog from "./components/AddBlog";
import ListBlogs from "./components/ListBlogs";
import ShowBlogs from "./components/ShowBlogs";

export default {
  name: "App",
  components: {
    ListBlogs,
    ShowBlogs
    // AddBlog
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
