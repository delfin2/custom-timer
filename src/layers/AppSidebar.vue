<template>
<div class="app-sidebar">
  <div class="app-sidebar__list">
    <div
      class="app-sidebar__list__el"
      v-for="(el, idx) in mockData.elements"
      :key="idx"
      @click="$router.push(el.route)"
    >
      {{el.label}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AppSidebar',

  data () {
    return {
      mockData: {
        elements: [
          {
            label: 'Home',
            route: '/'
          },
          {
            label: 'Settings',
            route: '/about'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-sidebar {
  background-color: $second-background;
  max-width: 300px;
  font-size: 1.6rem;
  padding: 5px;

  &__list {
    &__el {
      padding: 5px;
    }
  }
}
</style>
