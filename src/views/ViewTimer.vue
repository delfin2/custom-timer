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
        :label="timer.label"
        @remove-timer="removeTimer(idx)"
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
import {setTimer, getTimers, removeTimerByIdx} from '@/localStorageApi.js'

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
      // [KAV] TODO: swap lazy import with vue asyncComponent
      AppNewTimerForm: () => import('@/components/AppNewTimerForm.vue')
    }
  },

  mounted () {
    this.fetchTimers()
  },

  methods: {
    removeTimer (idx) {
      removeTimerByIdx(idx)
        .then(() => this.fetchTimers())
    },
    addTimer () {
      this.$emit('toggle-popup', this.AppNewTimerForm)
    },
    fetchTimers () {
      getTimers()
        .then(response => this.timers = response)
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
