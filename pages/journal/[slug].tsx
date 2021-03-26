import React from 'react'
import { getPostStaticPaths, getPostStaticProps, ApiQuery } from '../../lib/api'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Article, { ArticleProps } from '../../components/Article'

const Post: NextPage<ArticleProps> = (props) => <Article {...props} />

export const getStaticProps: GetStaticProps<ArticleProps, ApiQuery> = async ({
  params,
  locale,
}) => ({
  props: getPostStaticProps(params, locale),
})

export const getStaticPaths: GetStaticPaths<ApiQuery> = async ({
  locales,
}) => ({
  paths: getPostStaticPaths(locales),
  fallback: false,
})

export default Post
