<template>
  <div class="wrapper-page">
    <post-form @create="createPost"/>
    <post-list :posts="posts"/>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default {
  name: 'App.vue',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript 0', body: 'Text Description'},
        {id: 2, title: 'JavaScript 1', body: 'Text Description'},
        {id: 3, title: 'JavaScript 2', body: 'Text Description'},
        {id: 4, title: 'JavaScript 3', body: 'Text Description'},
        {id: 5, title: 'JavaScript 4', body: 'Text Description'},
      ]
    };
  },
  methods: {
    createPost(post) {
      if (post.title.length > 0 && post.body.length > 0) {
        this.posts.push(post);
      }
    }
  }
};

</script>

<style>
* {
  margin: 0;
  padding: .3rem;
  box-sizing: border-box;
}
</style>