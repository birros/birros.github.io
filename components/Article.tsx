import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Heading, Box } from '@chakra-ui/react'
import ChakraUIRenderer from '../lib/ChakraUIRenderer'
import { ApiProps } from '../lib/api'
import Infos from './Infos'

export type ArticleProps = Omit<Omit<ApiProps, 'summary'>, 'slug'>

const Article: React.FC<ArticleProps> = ({ title, content, author, date }) => (
  <Box as="article">
    <Box as="header">
      <Heading as="h1">{title}</Heading>
      <Infos date={date} author={author} mt="2" />
    </Box>
    <Box as="div" mt={3}>
      <ReactMarkdown
        renderers={ChakraUIRenderer()}
        plugins={[gfm]}
        children={content}
        escapeHtml={false}
      />
    </Box>
  </Box>
)

export default Article
