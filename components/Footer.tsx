import { Box, BoxProps, Link, Text } from '@chakra-ui/react'
import React from 'react'
import ContainerizedLayout from './ContainerizedLayout'
import NextLink from 'next/link'

const getCurrentYear = () => new Date().getFullYear()

const items = [
  {
    label: 'Shader extrait du framework OGL',
    href: 'https://github.com/oframe/ogl',
  },
  {
    label: 'Images d’illustration issues de Pixabay',
    href: 'https://pixabay.com/',
  },
  {
    label: 'Avatar généré grâce au Avataaars Generator',
    href: 'https://getavataaars.com/',
  },
]

const Footer: React.FC<BoxProps> = (props) => (
  <Box py="10" backgroundColor="gray.100" {...props}>
    <ContainerizedLayout
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
    >
      <Text color="gray.800">{getCurrentYear()} © Tous droits réservés</Text>
      {items.map(({ label, href }) => (
        <NextLink href={href} passHref>
          <Link key={href} color="gray.800">
            {label}
          </Link>
        </NextLink>
      ))}
    </ContainerizedLayout>
  </Box>
)

export default Footer
