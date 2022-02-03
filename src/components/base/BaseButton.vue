<template>
  <button class="base-button">
    {{label}}
  </button>
</template>

<script>
export default {
  props: {
    label: String
  },

  name: 'BaseButton'
}
</script>

<style lang="scss" scoped>
.base-button {
  font-size: 1.6rem;
  padding: 5px;
  color: black;
  background-color: $second-color;
  border: none;
  cursor: pointer;
}
</style>
