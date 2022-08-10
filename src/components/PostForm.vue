<template>
  <div>
    <form @submit.prevent>
      <h4>Post Creating</h4>
      <div class="form-group">
        <my-input
            v-focus
            v-model="this.post.title"
            type="text"
            name="post_name"
            id="post_name"
            placeholder="Post Name"/>
      </div>
      <div class="form-group">
        <my-input
            v-model="this.post.body"
            type="text" name="post_description"
            id="post_description"
            placeholder="Post Description"/>
      </div>
      <my-button @click="createPost">Add Post</my-button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'PostForm',
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    };
  },
  methods: {
    createPost(e) {
      e.preventDefault();
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      };
    }
  }
};
</script>

<style scoped>

</style>
