import { useEffect, useRef } from 'react'

const useMouseTrail = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!process.browser) {
      return
    }

    ;(async () => {
      const setupMouseTrail = (await import('./setupMouseTrail')).default
      setupMouseTrail(ref.current)
    })()
  }, [ref])

  return ref
}

export default useMouseTrail
