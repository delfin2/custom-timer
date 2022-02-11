<template>
  <div class="view-home">
    <base-button
      label="Add timer"
      @click="addTimer"
    />

    <template v-if="timers.length">
      <AppTimerCard
        v-for="(timer, idx) in timers"
        :key="idx"
        v-bind="timer"
        @remove-timer="removeTimer(idx)"
        @start-timer="startTimer(idx)"
      />

      <base-button
        label="Add timer"
        @click="addTimer"
      />
    </template>
  </div>
</template>

<script>
import AppTimerCard from '@/components/AppTimerCard.vue'
import {newTimer, getTimers, removeTimerByIdx} from '@/localStorageApi.js'
import {defineAsyncComponent, markRaw} from 'vue'

export default {
  name: 'ViewTimer',

  components: {
    AppTimerCard
  },

  emits: {
    'toggle-popup': Object
  },

  data () {
    return {
      timers: [],
      AppNewTimerForm: markRaw(defineAsyncComponent(() => import('@/components/AppNewTimerForm.vue')))
    }
  },

  mounted () {
    this.fetchTimers()
  },

  methods: {
    removeTimer (idx) {
      removeTimerByIdx(idx)
        .then(timers => this.timers = timers)
    },
    startTimer (idx) {
      console.log('start', idx)
    },
    addTimer () {
      this.$emit('toggle-popup', this.AppNewTimerForm)
    },
    fetchTimers () {
      getTimers()
        .then(timers => this.timers = timers)
    },
    createNewTimer (payload) {
      newTimer(payload)
        .then(timers => this.timers = timers)
      this.$emit('toggle-popup')
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
  overflow-y: scroll;
}
</style>
