import React from 'react'
import { getProjectAllSummariesStaticProps } from '../../lib/api'
import { GetStaticProps, NextPage } from 'next'
import sortByDate from '../../lib/sortByDate'
import Summaries, { SummariesProps } from '../../components/Summaries'
import Head from 'next/head'
import { useFormatTitle, useTranslate } from '../../lib/hooks'
import ContainerizedLayout from '../../components/ContainerizedLayout'

const Projects: NextPage<SummariesProps> = (props) => {
  const _ = useTranslate()
  const formatTitle = useFormatTitle()

  return (
    <>
      <Head>
        <title>{formatTitle(_('nav.projects'))}</title>
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
    items: getProjectAllSummariesStaticProps(locale).sort(sortByDate),
    base: '/projects',
  },
})

export default Projects
