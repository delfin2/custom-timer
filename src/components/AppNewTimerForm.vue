<template>
  <div class="new-timer-form">
    <base-text-input
      placeholder="Name"
      v-model="newTimer.name"
    />
    <base-text-input
      placeholder="Time"
      v-model="newTimer.time"
    />
    <base-button
      label="Add"
      @click="addNewTimer"
    />
  </div>
</template>

<script>
export default {
  name: 'AppNewTimerForm',

  data () {
    return {
      newTimer: {
        name: 'New Timer',
        time: 10
      }
    }
  },

  methods: {
    addNewTimer () {
      this.$emit('addNewTimer', this.newTimer)
    }
  }
}
</script>

<style lang="scss" scoped>
.new-timer-form {
  display: flex;
  flex-direction: column;
}
</style>
