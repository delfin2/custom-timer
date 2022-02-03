<template>
  <div class="app">
    <app-header
      class="app__header"
      @toggle-sidebar="showSidebar = !showSidebar"
    ></app-header>

    <div class="app__content">
      <app-sidebar
        v-if="showSidebar"
        class="app__sidebar"
      ></app-sidebar>

      <router-view class="app__view" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      showSidebar: true
    }
  }
}
</script>

<style lang="scss">
.app {
  height: 100%;
  background-color: $base-background;
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    width: 100%;
    flex-grow: 4;
  }
}
</style>
