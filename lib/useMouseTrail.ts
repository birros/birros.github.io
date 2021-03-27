import { useEffect, useRef } from 'react'

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
    const cb = () => (timeout = setTimeout(setup, 4 * 1000))

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
