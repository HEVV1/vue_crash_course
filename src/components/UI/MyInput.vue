<template>
  <div class="form-group">
    <input :value="modelValue" @input="updateInput" class="form-control" type="text" name="" id="">
  </div>
</template>

<script>
export default {
  name: 'my-input',
  props:{
    modelValue:[String, Number]
  },
  methods: {
    updateInput(e){
      this.$emit('update:modelValue', e.target.value)
    }
  }
};
</script>

<style scoped>
.form-group .form-control {
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid black;
}
</style>