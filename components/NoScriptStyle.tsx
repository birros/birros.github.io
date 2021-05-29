import React from 'react'
import Head from 'next/head'
import { fadeUpWhenVisibleNoScriptStyle } from './FadeUpWhenVisible'

const NoScriptStyle: React.FC = () => (
  <>
    <Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              ${fadeUpWhenVisibleNoScriptStyle}
            </style>
          `,
        }}
      />
    </Head>
  </>
)

export default NoScriptStyle
