import React from 'react'
import { getPostAllSummariesStaticProps } from '../lib/api'
import { GetStaticProps, NextPage } from 'next'
import sortByDate from '../lib/sortByDate'
import Summaries, { SummariesProps } from '../components/Summaries'
import Head from 'next/head'
import { useTranslate } from '../lib/hooks'

const Index: NextPage<SummariesProps> = (props) => {
  const _ = useTranslate()

  return (
    <>
      <Head>
        <title>{_('default.title')}</title>
      </Head>
      <Summaries {...props} />
    </>
  )
}

export const getStaticProps: GetStaticProps<SummariesProps> = async ({
  locale,
}) => ({
  props: {
    items: getPostAllSummariesStaticProps(locale).sort(sortByDate),
    base: '/journal',
  },
})

export default Index
