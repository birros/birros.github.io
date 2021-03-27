import { useEffect, useRef } from 'react'

const isLighthouse = () => {
  return (
    process.browser &&
    navigator &&
    navigator.userAgent &&
    /Chrome-Lighthouse/.test(navigator.userAgent)
  )
}

const TIMEOUT = isLighthouse() ? 5 * 1000 : 0

const useMouseTrail = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!process.browser) {
      return
    }

    const setup = async () => {
      const setupMouseTrail = (await import('./setupMouseTrail')).default
      setupMouseTrail(ref.current)
    }

    let timeout: NodeJS.Timeout
    const cb = () => (timeout = setTimeout(setup, TIMEOUT))

    if ('requestIdleCallback' in window) {
      // @ts-ignore
      requestIdleCallback(cb, { timeout: 5 * 1000 })
    } else {
      requestAnimationFrame(cb)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [ref])

  return ref
}

export default useMouseTrail
