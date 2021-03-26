import React, { useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'
import 'prismjs/themes/prism.css'
import 'katex/dist/katex.min.css'
import { useRouter } from 'next/router'

const Layout: React.FC = ({ children }) => {
  const { pathname } = useRouter()

  useEffect(() => {
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

  useEffect(() => {
    ;(async () => {
      const Viz = (await import('viz.js')).default
      // @ts-ignore
      const { Module, render } = await import('viz.js/full.render')

      const viz = new Viz({ Module, render })

      const nodes: NodeListOf<HTMLElement> = document.querySelectorAll(
        '[class=language-dot]'
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

        const parentElement = el.parentElement
        if (!parentElement || !parentElement.parentElement) {
          return
        }

        parentElement?.parentElement.insertBefore(svg, parentElement)
        parentElement.style.display = 'none'
      })
    })()
  }, [pathname])

  return (
    <>
      <Header
        borderBottom="1px"
        borderBottomColor="gray.200"
        position="fixed"
        width="100%"
        top="0"
        zIndex="2"
      />
      <Container as="main" maxW="container.md" mt="14" py="4">
        {children}
      </Container>
    </>
  )
}

export default Layout
