import { useEffect, useRef } from 'react'
import requestIdleCallback, { cancelIdleCallback } from './requestIdleCallback'

const useMouseTrail = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!process.browser) {
      return
    }

    const requestObj = requestIdleCallback(async () => {
      const setupMouseTrail = (await import('./setupMouseTrail')).default
      setupMouseTrail(ref.current)
    })

    return () => {
      cancelIdleCallback(requestObj)
    }
  }, [ref])

  return ref
}

export default useMouseTrail
