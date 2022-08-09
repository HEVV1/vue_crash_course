<template>
  <div v-if="posts.length > 0">
    <h3>List of users</h3>
    <transition-group name="post-list">
      <post-item :key="post.id" @remove="$emit('remove', post)" v-for="post in posts" :post="post"/>
    </transition-group>
  </div>
  <h2 v-else style="color: red">
    There is no posts in the list!
  </h2>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
  name: 'PostList',
  components: {
    PostItem
  },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.post-list {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all .3s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.post-list-move{
  transition: transform 0.4s ease;
}
</style>