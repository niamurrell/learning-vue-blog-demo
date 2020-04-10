<template>
  <!-- passed to theme as a string: -->
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.id">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      blogs: []
    };
  },
  methods: {},
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search) || blog.body.match(this.search);
      });
    }
  },
  created() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response.data);
        this.blogs = response.data.slice(0, 10);
      });
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>