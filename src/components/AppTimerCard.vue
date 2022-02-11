<template>
  <div class="app-timer-card">
    <div class="app-timer-card__title">{{name}}</div>
    <span>Time left: {{timeLeft}}</span>
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
    timeLeft: Number
  },

  emits: {
    'remove-timer': null,
    'start-timer': null,
    'stop-timer': null,
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
