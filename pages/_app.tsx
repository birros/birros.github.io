import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Head from 'next/head'
import theme from '../lib/theme'
import { useSetupVH, useTranslate } from '../lib/hooks'
import isMobileOrTablet from '../lib/isMobileOrTablet'
import setupScrollIntoViewPolyfill from '../lib/setupScrollIntoViewPolyfill'
import { NextSeo } from 'next-seo'

setupScrollIntoViewPolyfill()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useSetupVH(!isMobileOrTablet())
  const _ = useTranslate()

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <NextSeo
        openGraph={{
          url: _('opengraph.url'),
          title: _('default.title'),
          site_name: _('default.title'),
          type: 'website',
          description: _('opengraph.description'),
          images: [
            {
              url: 'https://julienmuret.fr/assets/home/screenshot.png',
              width: 2880,
              height: 1648,
              alt: _('opengraph.imageAlt'),
            },
          ],
        }}
      />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
