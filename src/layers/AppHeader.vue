<template>
<div class="app-header">
  <span
    class="material-icons app-header__sidebar-button"
    @click="$emit('toggle-sidebar')"
  >
    reorder
  </span>
  <span class="app-header__title">
    Timer
  </span>
</div>
</template>

<script>
export default {
  name: 'AppHeader',

  emits: {
    'toggle-sidebar': null
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 10px;

  &__sidebar-button {
    margin-right: 10px;
  }

  &__title {
    font-size: 2.5rem;
  }
}
</style>
