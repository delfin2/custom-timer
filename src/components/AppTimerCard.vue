<template>
  <div class="app-timer-card">
    {{label}}
  </div>
</template>

<script>
export default {
  name: 'AppTimerCard',

  props: {
    label: String
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
