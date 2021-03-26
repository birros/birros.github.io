import React from 'react'
import { Box } from '@chakra-ui/react'
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
    <Box as="main" pt="14">
      {children}
    </Box>
  </>
)

export default Layout