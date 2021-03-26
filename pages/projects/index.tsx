import React from 'react'
import { getProjectAllSummariesStaticProps } from '../../lib/api'
import { GetStaticProps, NextPage } from 'next'
import sortByDate from '../../lib/sortByDate'
import Summaries, { SummariesProps } from '../../components/Summaries'

const Projects: NextPage<SummariesProps> = (props) => <Summaries {...props} />

export const getStaticProps: GetStaticProps<SummariesProps> = async ({
  locale,
}) => ({
  props: {
    items: getProjectAllSummariesStaticProps(locale).sort(sortByDate),
    base: '/projects',
  },
})

export default Projects
