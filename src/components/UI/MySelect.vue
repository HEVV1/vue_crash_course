<template>
  <div class="form-group">
    <select v-model="modelValue" @change="changeOption">
      <option disabled value="">Choose some topic from list</option>
      <option v-for="objOption in options" :key="objOption.value" :value="objOption.value ">{{ objOption.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
};
</script>

<style scoped>

</style>