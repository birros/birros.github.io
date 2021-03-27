import { useEffect } from 'react'
import { useRouter } from 'next/router'
import requestIdleCallback, { cancelIdleCallback } from './requestIdleCallback'

const useGraphViz = () => {
  const { pathname } = useRouter()

  useEffect(() => {
    if (!process.browser) {
      return
    }

    const requestObj = requestIdleCallback(async () => {
      const Viz = (await import('viz.js')).default
      // @ts-ignore
      const { Module, render } = await import('viz.js/full.render')

      const viz = new Viz({ Module, render })

      const nodes: NodeListOf<HTMLElement> = document.querySelectorAll(
        '[class*=language-dot]'
      )
      nodes.forEach(async (el) => {
        if (el.style.display === 'none') {
          return
        }
        const data = el.innerText.replaceAll('&quot;', '"')

        const svg = await viz.renderSVGElement(data, {
          format: 'svg',
          engine: 'dot',
        })

        el.parentElement?.insertBefore(svg, el)
        el.style.display = 'none'
      })
    })

    return () => {
      cancelIdleCallback(requestObj)
    }
  }, [pathname])
}

export default useGraphViz
