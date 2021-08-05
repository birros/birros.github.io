import { useEffect, useRef, useState } from 'react'
import requestIdleCallback, { cancelIdleCallback } from './requestIdleCallback'

export const vantaGlobalStyles = {
  '.vanta-canvas': {
    animation: 'vantaFadeIn 300ms ease',
  },
  '@keyframes vantaFadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}

const useVantaWaves = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(undefined)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!process.browser) {
      return
    }

    const requestObj = requestIdleCallback(async () => {
      const [THREE, { default: WAVES }] = await Promise.all([
        import('three'),
        // @ts-ignore
        import('vanta/dist/vanta.waves.min'),
      ])

      setVantaEffect(
        WAVES({
          el: ref.current,
          THREE,
          color: 0x2a4365, // blue.800
        })
      )
    })

    return () => {
      cancelIdleCallback(requestObj)
    }
  }, [ref])

  useEffect(() => {
    return () => {
      if (vantaEffect) {
        // @ts-ignore
        vantaEffect.destroy()
      }
    }
  }, [vantaEffect])

  return ref
}

export default useVantaWaves
