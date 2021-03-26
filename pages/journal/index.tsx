import React from 'react'
import { getPostAllSummariesStaticProps } from '../../lib/api'
import { GetStaticProps, NextPage } from 'next'
import sortByDate from '../../lib/sortByDate'
import Summaries, { SummariesProps } from '../../components/Summaries'

const Journal: NextPage<SummariesProps> = (props) => <Summaries {...props} />

export const getStaticProps: GetStaticProps<SummariesProps> = async ({
  locale,
}) => ({
  props: {
    items: getPostAllSummariesStaticProps(locale).sort(sortByDate),
    base: '/journal',
  },
})

export default Journal
