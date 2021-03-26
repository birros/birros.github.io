import React from 'react'
import { Box, ChakraProps, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslate } from '../lib/hooks'

interface Props {
  date: string | null
  author: {
    username: string
    email: string
  } | null
}

const Infos: React.FC<Props & ChakraProps> = ({ date, author, ...rest }) => {
  const { locale } = useRouter()
  const _ = useTranslate()

  return date || author ? (
    <Box as="div" {...rest}>
      {date && (
        <Text as="span" color="gray.600">
          {_('infos.date') + new Date(date).toLocaleDateString(locale)}
        </Text>
      )}
      {author && (
        <>
          <Text as="span" color="gray.600">
            {date ? _('infos.authorInter') : _('infos.authorSingle')}
          </Text>
          <NextLink href={`mailto:${author.email}`} passHref>
            <Link rel="author" color="green.500">
              {author.username}
            </Link>
          </NextLink>
        </>
      )}
    </Box>
  ) : (
    <></>
  )
}

export default Infos
