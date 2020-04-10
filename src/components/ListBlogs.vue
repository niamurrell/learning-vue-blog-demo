<template>
  <!-- passed to theme as a string: -->
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.id">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      search: "",
      blogs: []
    };
  },
  methods: {},
  computed: {},
  filters: {
    "to-uppercase": function(value) {
      return value.toUpperCase();
    },
    capitalizeFirst(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    snippet: function(value) {
      return `${value.slice(0, 100)}...`;
    }
  },
  directives: {
    rainbow: {
      bind: function(el) {
        el.style.color = `#${Math.random()
          .toString(16)
          .slice(2, 8)}`;
      }
    }
  },
  mixins: [searchMixin],
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