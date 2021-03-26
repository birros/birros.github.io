import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useTranslate } from '../lib/hooks'
import Hero from '../components/Hero'
import isMobileOrTablet from '../lib/isMobileOrTablet'
import { useSetupVH } from '../lib/hooks'

const Index: NextPage = () => {
  const _ = useTranslate()
  useSetupVH(!isMobileOrTablet())

  return (
    <>
      <Head>
        <title>{_('default.title')}</title>
      </Head>
      <Hero minHeight="calc(calc(var(--vh, 1vh) * 100) - var(--chakra-space-14))" />
    </>
  )
}

export default Index
