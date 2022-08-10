<template>
  <div class="post">
    <div>
      <strong>Id: </strong> {{ post.id }}
      <br>
      <strong>Name: </strong> {{ post.title }}
      <br>
      <strong>Topic: </strong> {{ post.body }}
    </div>
    <div class="wrapper-buttons">
      <my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
      <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props:{
    post:{
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
.post {
  border: .1rem solid black;
  margin-bottom: 2rem;
  padding: 1rem;
}
.wrapper-buttons{
  display: flex;
}
</style>