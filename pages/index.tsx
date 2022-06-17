import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useTranslate } from '../lib/hooks'
import Resume from '../components/Resume'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'
import resume from '../data/resume'

const ResumeLayout = styled(Resume)`
  @media screen {
    max-width: 991px;
    min-height: 1387px;
  }

  @media screen and (min-width: calc(991px + 2 * 20px)) {
    box-shadow: var(--chakra-shadows-lg);
    border-radius: var(--chakra-radii-md);
    margin: 20px auto;
  }

  @media screen and (max-width: 750px) {
    background: linear-gradient(
      to top,
      var(--chakra-colors-secondary-100),
      var(--chakra-colors-primary-100)
    );
  }

  @media screen and (min-width: 750px) {
    background: linear-gradient(
      to left,
      var(--chakra-colors-secondary-100),
      var(--chakra-colors-primary-100)
    );
  }
`

const Index: NextPage = () => {
  const _ = useTranslate()

  return (
    <>
      <Head>
        <title>{_('default.title')}</title>
      </Head>
      <Global
        styles={css`
          @media screen and (min-width: calc(991px + 2 * 20px)) {
            main {
              background: linear-gradient(
                to left,
                var(--chakra-colors-secondary-300),
                var(--chakra-colors-primary-300)
              );

              padding-bottom: 1px;
            }
          }
        `}
      />
      <ResumeLayout resume={resume} />
    </>
  )
}

export default Index
