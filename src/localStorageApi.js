export const setTimer = (newTimer) => {
  const timers = JSON.parse(localStorage.getItem('timers') ?? '[]')
  timers.push(newTimer)
  localStorage.setItem('timers', JSON.stringify(timers))
  return true
}

export const getTimers = () => {
  const timers = JSON.parse(localStorage.getItem('timers') ?? '[]')
  return timers
}
