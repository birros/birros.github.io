import { Text, Box, Link } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import NextImage from 'next/image'
import Card, { CardProps } from './Card'
import NextLink from 'next/link'
import parseColor from '../lib/parseColor'

interface ColorScheme {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface WorkProps {
  colorScheme: ColorScheme
  href: string
  title: string
  description: string
  src: string
}

const Work: React.FC<WorkProps & CardProps> = ({
  colorScheme,
  href,
  title,
  description,
  src,
  ...rest
}) => {
  const bgColor = useMemo(() => {
    const c = parseColor(colorScheme[700])
    return `rgba(${c.r}, ${c.g}, ${c.b}, 0.9)`
  }, [colorScheme])

  const bgColorHover = useMemo(() => {
    const c = parseColor(colorScheme[800])
    return `rgba(${c.r}, ${c.g}, ${c.b}, 0.9)`
  }, [colorScheme])

  return (
    <Card {...rest}>
      <Box position="absolute" zIndex="1" top="0" right="0" left="0" bottom="0">
        <Box width="100%" height="100%">
          <NextImage
            src={src}
            layout="responsive"
            width="1600"
            height="1000"
            objectFit="cover"
          />
        </Box>
      </Box>
      <NextLink href={href} passHref>
        <Link
          position="absolute"
          zIndex="3"
          top="0"
          right="0"
          left="0"
          bottom="0"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="8"
          textAlign="center"
          color="white"
          backgroundColor={bgColor}
          _hover={{
            backgroundColor: bgColorHover,
          }}
        >
          <Text as="strong" fontSize="2xl">
            {title}
          </Text>
          <Text as="span" mt={4} maxW="300px">
            {description}
          </Text>
        </Link>
      </NextLink>
    </Card>
  )
}

export default Work
