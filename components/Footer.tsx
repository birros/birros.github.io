import { Box, BoxProps, Link, Text } from '@chakra-ui/react'
import React from 'react'
import ContainerizedLayout from './ContainerizedLayout'
import NextLink from 'next/link'
import { Keys } from '../lib/locales'
import { useTranslate } from '../lib/hooks'

const getCurrentYear = () => new Date().getFullYear()

interface Item {
  labelKey: Keys
  href: string
}

const items: Array<Item> = [
  {
    labelKey: 'footer.ogl',
    href: 'https://github.com/oframe/ogl',
  },
  {
    labelKey: 'footer.pixabay',
    href: 'https://pixabay.com/',
  },
  {
    labelKey: 'footer.avataaars',
    href: 'https://getavataaars.com/',
  },
]

const Footer: React.FC<BoxProps> = (props) => {
  const _ = useTranslate()

  return (
    <Box py="10" backgroundColor="gray.100" {...props}>
      <ContainerizedLayout
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <Text color="gray.800">
          {getCurrentYear()} © {_('footer.copyrith')}
        </Text>
        {items.map(({ labelKey, href }) => (
          <NextLink key={href} href={href} passHref>
            <Link color="gray.800">{_(labelKey)}</Link>
          </NextLink>
        ))}
      </ContainerizedLayout>
    </Box>
  )
}

export default Footer
