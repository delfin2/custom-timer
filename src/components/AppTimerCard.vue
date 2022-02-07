<template>
  <div class="app-timer-card">
    {{label}}
    <base-button
      label="Remove"
      @click="$emit('remove-timer')"
    />
  </div>
</template>

<script>
export default {
  name: 'AppTimerCard',

  props: {
    label: String
  },

  emits: {
    'remove-timer': null
  }
}
</script>

<style lang="scss" scoped>
.app-timer-card {
  font-size: 1.6rem;
  border: 2px solid $extra-color;
  padding: 15px;
  margin: 10px;
}
</style>
