<template>
  <div class="view-home">
    <base-button
      label="Add timer"
      @click="addTimer"
    />

    <AppTimerCard
      v-for="(timer, idx) in timers"
      :key="idx"
      :label="timer.label" 
    />
  </div>
</template>

<script>
import AppTimerCard from '@/components/AppTimerCard.vue'
import {setTimer, getTimers} from '@/localStorageApi.js'

export default {
  name: 'ViewTimer',

  components: {
    AppTimerCard
  },

  data () {
    return {
      timers: getTimers()
    }
  },

  methods: {
    addTimer () {
      setTimer({label: `timer ${this.timers.length + 1}`})
      this.timers = getTimers()
    }
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
