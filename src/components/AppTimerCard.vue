<template>
  <div class="app-timer-card">
    <div class="app-timer-card__title">{{name}}</div>
    <span>Time left: {{timer}}</span>
    <base-button
      label="Start"
      @click="$emit('start-timer')"
    />
    <base-button
      type="transparent"
      label="Stop"
      @click="$emit('stop-timer')"
    />
    <base-button
      color="red"
      label="Remove"
      @click="$emit('remove-timer')"
    />
  </div>
</template>

<script>
export default {
  name: 'AppTimerCard',

  props: {
    name: String,
    timeLeft: Number,
    started: String,
    stoped: String
  },

  emits: {
    'remove-timer': null,
    'start-timer': null,
    'stop-timer': null,
  },

  data () {
    return {
      timer: Math.floor(this.timeLeft / 1000),
      intervalId: null
    }
  },

  mounted () {
    this.intervalId = setInterval(() => {
      if (this.started && !this.stoped) {
        const startedTime = new Date(this.started)
        const nowTime = new Date()
        const passedTime = nowTime - startedTime
        console.log('interval calc')
        this.timer = Math.floor((this.timeLeft - passedTime) / 1000)
      }
    }, 1000)
  },

  beforeUnmount () {
    clearInterval(this.intervalId)
  }
}
</script>

<style lang="scss" scoped>
.app-timer-card {
  font-size: 1.6rem;
  border: 2px solid $extra-color;
  padding: 15px;
  margin: 10px;

  &__title {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
  }
}
</style>
