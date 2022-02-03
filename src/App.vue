<template>
  <div class="app">
    <app-header class="app__header"></app-header>
    <div class="app__content">
      <app-sidebar class="app__sidebar"></app-sidebar>
      <router-view class="app__view" />
    </div>
  </div>
</template>

<script>
import layers from './layers'

export default {
  name: 'App',

  components: {
    ...layers.components
  }
}
</script>

<style lang="scss">
.app {
  &__content {
    display: flex;
  }
}
</style>
