import React from 'react'
import NextLink from 'next/link'
import { ApiProps } from '../lib/api'
import { Box, Heading, Link } from '@chakra-ui/react'
import Infos from './Infos'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import ChakraUIRenderer from '../lib/ChakraUIRenderer'
import { useTranslate } from '../lib/hooks'

export interface SummariesProps {
  items: Omit<ApiProps, 'content'>[]
  base: string
}

const Summaries: React.FC<SummariesProps> = ({ base, items }) => {
  const _ = useTranslate()

  return (
    <>
      {items.map(({ slug, title, date, author, summary }, index) => (
        <Box
          as="article"
          key={slug}
          {...(index < items.length - 1
            ? {
                borderBottom: '1px',
                borderBottomColor: 'gray.200',
                pb: '4',
                mb: '4',
              }
            : {})}
        >
          <Box as="header">
            <Heading as="h2" size="lg">
              <Link as={NextLink} href={`${base}/${slug}`}>
                {title}
              </Link>
            </Heading>
            <Infos date={date} author={author} mt="1" />
          </Box>
          {summary && (
            <Box as="div" mt={3}>
              <ReactMarkdown
                components={ChakraUIRenderer()}
                remarkPlugins={[gfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {summary}
              </ReactMarkdown>
              <Link as={NextLink} href={`${base}/${slug}`}>
                {_('summary.more')}
              </Link>
            </Box>
          )}
        </Box>
      ))}
    </>
  )
}

export default Summaries
