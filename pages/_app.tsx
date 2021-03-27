import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Head from 'next/head'
import theme from '../lib/theme'
import { useSetupVH } from '../lib/hooks'
import isMobileOrTablet from '../lib/isMobileOrTablet'
import setupScrollIntoViewPolyfill from '../lib/setupScrollIntoViewPolyfill'

setupScrollIntoViewPolyfill()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useSetupVH(!isMobileOrTablet())

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
