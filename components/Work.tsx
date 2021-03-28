import { Text, Box, Link } from '@chakra-ui/react'
import React from 'react'
import NextImage from 'next/image'
import Card, { CardProps } from './Card'
import NextLink from 'next/link'

interface Props {
  color: string
  href: string
  title: string
  description: string
  src: string
}

const Work: React.FC<Props & CardProps> = ({
  color,
  href,
  title,
  description,
  src,
  ...rest
}) => (
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
    <Box
      position="absolute"
      zIndex="2"
      top="0"
      right="0"
      left="0"
      bottom="0"
      backgroundColor={color}
      opacity="0.9"
    ></Box>
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

export default Work
