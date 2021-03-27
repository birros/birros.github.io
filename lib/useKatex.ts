import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'katex/dist/katex.min.css'

const useKatex = () => {
  const { pathname } = useRouter()

  useEffect(() => {
    if (!process.browser) {
      return
    }

    ;(async () => {
      const renderMathInElement = (
        await import('katex/dist/contrib/auto-render')
      ).default

      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
      })
    })()
  }, [pathname])
}

export default useKatex
