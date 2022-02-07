<template>
  <div class="view-home">
    <base-button label="Add timer"></base-button>

    <AppTimerCard
      v-for="(timer, idx) in timers"
      :key="idx"
      :label="timer.label" 
    />
  </div>
</template>

<script>
import AppTimerCard from '@/components/AppTimerCard.vue'

export default {
  name: 'ViewTimer',

  components: {
    AppTimerCard
  },

  data () {
    return {
      timers: [
        {
          label: 'timer 1'
        },
        {
          label: 'timer 2'
        }
      ]
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
