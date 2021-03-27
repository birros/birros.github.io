import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'
import useKatex from '../lib/useKatex'
import useGraphViz from '../lib/useGraphViz'

const Layout: React.FC = ({ children }) => {
  useKatex()
  useGraphViz()

  return (
    <>
      <Head>
        {/* fix prism white spaces on safari */}
        <style>
          {`
          pre *,
          pre *::before,
          pre *::after {
            word-wrap: initial !important;
          }
        `}
        </style>
      </Head>
      <Header
        borderBottom="1px"
        borderBottomColor="gray.200"
        position="fixed"
        width="100%"
        top="0"
        zIndex="4"
      />
      <Box as="main" pt="14" minHeight="calc(var(--vh, 1vh) * 100)">
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
