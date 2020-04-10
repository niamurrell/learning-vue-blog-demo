<template>
  <div id="add-blog">
    <h2>Add A New Blog Post</h2>
    <form v-if="!submitted">
      <label for="title">Blog Title</label>
      <input type="text" v-model.lazy="blog.title" name="title" id="title" required />

      <label for="content">Blog Content:</label>
      <textarea v-model.lazy="blog.content" name="content" id="content" cols="30" rows="10"></textarea>

      <div id="checkboxes">
        <label for="indoor">Indoor Plants</label>
        <input type="checkbox" name="indoor" id="indoor" value="indoor" v-model="blog.categories" />

        <label for="outdoor">Outdoor Plants</label>
        <input
          type="checkbox"
          name="outdoor"
          id="outdoor"
          value="outdoor"
          v-model="blog.categories"
        />

        <label for="flowers">Flowers</label>
        <input
          type="checkbox"
          name="flowers"
          id="flowers"
          value="flowers"
          v-model="blog.categories"
        />

        <label for="trees">Trees</label>
        <input type="checkbox" name="trees" id="trees" value="trees" v-model="blog.categories" />
      </div>

      <label for="region">Region:</label>
      <select v-model="blog.region" name="region" id="region">
        <option v-for="region in regions" v-bind:key="region">{{ region }}</option>
      </select>

      <div>
        <button v-on:click.prevent="post">Add Blog</button>
      </div>
    </form>

    <div v-if="submitted">
      <h3>Thanks for adding your post!</h3>
    </div>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
      </ul>
      <p>Region: {{ blog.region }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      blog: {
        title: "",
        content: "",
        categories: [],
        region: ""
      },
      regions: [
        "Pacific Northwest",
        "Northeast",
        "Northern Europe",
        "British Isles"
      ]
    };
  },
  methods: {
    post: function() {
      this.axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(response => {
          console.log(response.data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 25px;
}
#checkboxes label {
  display: inline-block;
}
</style>