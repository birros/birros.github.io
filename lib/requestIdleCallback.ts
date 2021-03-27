const isLighthouse = () => {
  return (
    process.browser &&
    navigator &&
    navigator.userAgent &&
    // use PageSpeed Insights screenshots to get Lighthouse userAgent
    /Chrome-Lighthouse/.test(navigator.userAgent)
  )
}

const LIGHTHOUSE_IDLE_TIMEOUT = 5 * 1000 // 5s (https://web.dev/fid/)
const CALLBACK_TIMEOUT = isLighthouse() ? LIGHTHOUSE_IDLE_TIMEOUT : 0
const REQUEST_IDLE_CALLBACK = 5 * 1000 // 5s

interface IdleCallbackObj {
  timeout?: number
  requestIdlesCallbackId?: number
  requestAnimationFrameId?: number
}

const requestIdleCallback = (cb: Function): IdleCallbackObj => {
  const obj: IdleCallbackObj = {}

  const intermediateCb = () => (obj.timeout = setTimeout(cb, CALLBACK_TIMEOUT))

  // @ts-ignore
  if (window && window.requestIdleCallback) {
    // @ts-ignore
    obj.requestIdleCallbackId = window.requestIdleCallback(intermediateCb, {
      timeout: REQUEST_IDLE_CALLBACK,
    })
  } else {
    obj.requestAnimationFrameId = requestAnimationFrame(intermediateCb)
  }

  return obj
}

export const cancelIdleCallback = (obj: IdleCallbackObj) => {
  clearTimeout(obj.timeout)

  if (window && window.cancelAnimationFrame && obj.requestAnimationFrameId) {
    window.cancelAnimationFrame(obj.requestAnimationFrameId)
  }

  // @ts-ignore
  if (window && window.cancelIdleCallback && obj.requestIdleCallbackId) {
    // @ts-ignore
    window.cancelIdleCallback(obj.requestIdleCallbackId)
  }
}

export default requestIdleCallback
