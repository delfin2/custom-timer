<template>
  <div
    class="app"
  >
    <app-header
      class="app__header"
      @toggle-sidebar="showSidebar = !showSidebar"
    ></app-header>

    <div class="app__content">
      <app-sidebar
        v-if="showSidebar"
        class="app__sidebar"
      ></app-sidebar>

      <router-view
        class="app__view"
        @toggle-popup="togglePopup"
      />
    </div>

    <transition name="fade">
      <base-popup
        v-if="showPopup"
        @toggle-popup="togglePopup"
      >
        <component :is="popupComponent" />
      </base-popup>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  setup () {
    return {
      popupComponent: null
    }
  },

  data () {
    return {
      showSidebar: false,
      showPopup: false
    }
  },

  methods: {
    togglePopup (lazyPopupComponent) {
      if (lazyPopupComponent) {
        lazyPopupComponent().then(result => {
          this.popupComponent = result.default
          this.showPopup = true
        })
      } else {
        this.popupComponent = null
        this.showPopup = false
      }
    }
  }
}
</script>

<style lang="scss">
.app {
  position: relative;
  height: 100%;
  background-color: $base-background;
  display: flex;
  flex-direction: column;

  &__header {
    height: 5%;
  }

  &__content {
    display: flex;
    height: 95%;
  }
}
</style>
