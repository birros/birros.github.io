import React from 'react'
import { getPostAllSummariesStaticProps } from '../../lib/api'
import { GetStaticProps, NextPage } from 'next'
import sortByDate from '../../lib/sortByDate'
import Summaries, { SummariesProps } from '../../components/Summaries'
import { useFormatTitle, useTranslate } from '../../lib/hooks'
import Head from 'next/head'
import ContainerizedLayout from '../../components/ContainerizedLayout'

const Journal: NextPage<SummariesProps> = (props) => {
  const _ = useTranslate()
  const formatTitle = useFormatTitle()

  return (
    <>
      <Head>
        <title>{formatTitle(_('nav.journal'))}</title>
      </Head>
      <ContainerizedLayout>
        <Summaries {...props} />
      </ContainerizedLayout>
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
