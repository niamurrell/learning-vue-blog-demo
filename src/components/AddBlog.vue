<template>
  <div id="add-blog">
    <h2>Add A New Blog Post</h2>
    <form>
      <label for="title">Blog Title</label>
      <input type="text" v-model.lazy="blog.title" name="title" id="title" required />

      <label for="content">Blog Content:</label>
      <textarea v-model.lazy="blog.content" name="content" id="content" cols="30" rows="10"></textarea>

      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{ blog.title }}</p>
        <p>Blog Content:</p>
        <p>{{ blog.content }}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: ""
      }
    };
  },
  methods: {}
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
</style>