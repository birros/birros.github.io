import React from 'react'
import {
  getProjectStaticPaths,
  getProjectStaticProps,
  ApiQuery,
} from '../../lib/api'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Article, { ArticleProps } from '../../components/Article'
import Head from 'next/head'
import { useFormatTitle } from '../../lib/hooks'
import ContainerizedLayout from '../../components/ContainerizedLayout'

const Project: NextPage<ArticleProps> = ({ title, ...rest }) => {
  const formatTitle = useFormatTitle()

  return (
    <>
      <Head>
        <title>{formatTitle(title)}</title>
      </Head>
      <ContainerizedLayout>
        <Article title={title} {...rest} />
      </ContainerizedLayout>
    </>
  )
}

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
