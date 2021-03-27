import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useGraphViz = () => {
  const { pathname } = useRouter()

  useEffect(() => {
    if (!process.browser) {
      return
    }

    ;(async () => {
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
    })()
  }, [pathname])
}

export default useGraphViz
