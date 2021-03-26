import React from 'react'
import { Box, Button, Flex, FlexProps, Heading } from '@chakra-ui/react'
import NextImage from 'next/image'
import useMouseTrail from '../lib/useMouseTrail'

const Hero: React.FC<FlexProps> = (props) => {
  const ref = useMouseTrail()

  return (
    <Flex
      as="div"
      backgroundColor="gray.100"
      position="relative"
      ref={ref}
      alignItems="center"
      justifyContent="center"
      transitionTimingFunction="ease"
      transitionProperty="min-height"
      transitionDuration="300ms"
      overflow="hidden"
      {...props}
    >
      <Flex
        position="relative"
        zIndex="1"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p="4"
      >
        <Heading as="h1" size="3xl" textAlign="center">
          <Box as="span" whiteSpace="nowrap">
            Développeur
          </Box>{' '}
          <Box as="span" whiteSpace="nowrap">
            Front-end
          </Box>
        </Heading>
        <Heading as="p" textAlign="center" size="lg" fontWeight="normal" mt={2}>
          <Box as="span" whiteSpace="nowrap">
            Je donne vie à vos projets,
          </Box>{' '}
          <Box as="span" whiteSpace="nowrap">
            pour vous… avec vous.
          </Box>
        </Heading>
        <Box as="span" mt="4">
          <NextImage
            src="/assets/home/avataaars.svg"
            width="200"
            height="200"
          />
        </Box>
        <Button colorScheme="primary" mt="4" borderRadius="full" size="lg">
          Contactez-moi
        </Button>
      </Flex>
    </Flex>
  )
}

export default Hero
