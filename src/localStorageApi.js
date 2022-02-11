export const newTimer = (newTimer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const timers = JSON.parse(localStorage.getItem('timers') ?? '[]')
      timers.push(newTimer)
      localStorage.setItem('timers', JSON.stringify(timers))
      resolve(timers)
    }, 1000)
  })
}

export const getTimers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const timers = JSON.parse(localStorage.getItem('timers') ?? '[]')
      resolve(timers)
    }, 1000)
  })
}

export const removeTimerByIdx = (idx) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const timers = JSON.parse(localStorage.getItem('timers') ?? '[]')
      timers.splice(idx, 1)
      localStorage.setItem('timers', JSON.stringify(timers))
      resolve(timers)
    }, 1000)
  })
}

export const putTimer = (idx, updFields) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const timers = JSON.parse(localStorage.getItem('timers') ?? '[]')
      timers[idx] = {...timers[idx], ...updFields}
      localStorage.setItem('timers', JSON.stringify(timers))
      resolve(timers)
    }, 1000)
  })
}
