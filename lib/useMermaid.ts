import { useEffect } from 'react'
import { useRouter } from 'next/router'
import requestIdleCallback, { cancelIdleCallback } from './requestIdleCallback'

const useMermaid = () => {
  const { pathname } = useRouter()

  useEffect(() => {
    if (!process.browser) {
      return
    }

    const requestObj = requestIdleCallback(async () => {
      const mermaid = (await import('mermaid')).default

      const nodes: NodeListOf<HTMLElement> = document.querySelectorAll(
        '[class*=language-mermaid]'
      )
      nodes.forEach(async (el) => {
        if (!crypto.randomUUID || el.style.display === 'none') {
          return
        }

        const data = el.innerText
        const uuid = `mermaid_${crypto.randomUUID().toString()}`

        const tmp = document.createElement('div')
        tmp.id = uuid
        tmp.style.display = 'none'
        document.body.appendChild(tmp)

        const svgStr = (() => {
          try {
            return mermaid.render(tmp.id, data)
          } catch (e) {
            console.warn(e)
          } finally {
            tmp.parentNode?.removeChild(tmp) // already removed when rendering
          }
          return undefined
        })()
        if (!svgStr) {
          return
        }

        const parser = new DOMParser()
        const svgDoc = parser.parseFromString(svgStr, 'image/svg+xml')
        const svg =
          svgDoc.firstChild instanceof SVGElement
            ? svgDoc.firstChild
            : undefined
        if (!svg) {
          return
        }

        el.parentElement?.insertBefore(svg, el)
        el.style.display = 'none'
      })
    })

    return () => {
      cancelIdleCallback(requestObj)
    }
  }, [pathname])
}

export default useMermaid
