import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Heading, Box } from '@chakra-ui/react'
import rehypeRaw from 'rehype-raw'
import ChakraUIRenderer from '../lib/ChakraUIRenderer'
import { ApiProps } from '../lib/api'
import Infos from './Infos'
import useKatex from '../lib/useKatex'
import useMermaid from '../lib/useMermaid'

export type ArticleProps = Omit<Omit<ApiProps, 'summary'>, 'slug'>

const Article: React.FC<ArticleProps> = ({ title, content, author, date }) => {
  useKatex()
  useMermaid()

  return (
    <Box as="article">
      <Box as="header">
        <Heading as="h1">{title}</Heading>
        <Infos date={date} author={author} mt="2" />
      </Box>
      <Box as="div" mt={3}>
        <ReactMarkdown
          components={ChakraUIRenderer()}
          remarkPlugins={[gfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </Box>
    </Box>
  )
}

export default Article
