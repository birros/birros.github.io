import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useTranslate } from '../lib/hooks'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Index: NextPage = () => {
  const _ = useTranslate()

  return (
    <>
      <Head>
        <title>{_('default.title')}</title>
      </Head>
      <Hero minHeight="calc(calc(var(--vh, 1vh) * 100) - var(--chakra-space-14))" />
      <Bio />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Index
