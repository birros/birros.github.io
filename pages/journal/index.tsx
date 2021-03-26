import React from 'react'
import { getPostAllSummariesStaticProps } from '../../lib/api'
import { GetStaticProps, NextPage } from 'next'
import sortByDate from '../../lib/sortByDate'
import Summaries, { SummariesProps } from '../../components/Summaries'
import { useTranslate } from '../../lib/hooks'
import Head from 'next/head'
import formatTitle from '../../lib/formatTitle'

const Journal: NextPage<SummariesProps> = (props) => {
  const _ = useTranslate()

  return (
    <>
      <Head>
        <title>{formatTitle(_('nav.journal'))}</title>
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

export default Journal
