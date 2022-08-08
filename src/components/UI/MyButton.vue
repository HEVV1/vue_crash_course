<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
};
</script>

<style scoped>
  .btn{
    margin-top: 1rem;
    background-color: unset;
    display: inline-block;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    cursor: pointer;
  }
</style>