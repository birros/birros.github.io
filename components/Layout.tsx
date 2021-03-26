import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'
import Head from 'next/head'

const Layout: React.FC = ({ children }) => (
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
      zIndex="2"
    />
    <Container as="main" maxW="container.md" mt="14" py="4">
      {children}
    </Container>
  </>
)

export default Layout
