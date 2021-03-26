import React from 'react'
import {
  getProjectStaticPaths,
  getProjectStaticProps,
  ApiQuery,
} from '../../lib/api'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Article, { ArticleProps } from '../../components/Article'

const Project: NextPage<ArticleProps> = (props) => <Article {...props} />

export const getStaticProps: GetStaticProps<ArticleProps, ApiQuery> = async ({
  params,
  locale,
}) => ({
  props: getProjectStaticProps(params, locale),
})

export const getStaticPaths: GetStaticPaths<ApiQuery> = async ({
  locales,
}) => ({
  paths: getProjectStaticPaths(locales),
  fallback: false,
})

export default Project
