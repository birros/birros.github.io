import React from 'react'
import { Box, Flex, FlexProps, Heading } from '@chakra-ui/react'
import NextImage from 'next/image'
import useMouseTrail from '../lib/useMouseTrail'
import ContactButton from './ContactButton'
import { useTranslate } from '../lib/hooks'

const Hero: React.FC<FlexProps> = (props) => {
  const ref = useMouseTrail()
  const _ = useTranslate()

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
            {_('hero.titleLeft')}
          </Box>{' '}
          <Box as="span" whiteSpace="nowrap">
            {_('hero.titleRight')}
          </Box>
        </Heading>
        <Heading as="p" textAlign="center" size="lg" fontWeight="normal" mt={2}>
          <Box as="span" whiteSpace="nowrap">
            {_('hero.subtitleLeft')}
          </Box>{' '}
          <Box as="span" whiteSpace="nowrap">
            {_('hero.subtitleRight')}
          </Box>
        </Heading>
        <Box as="span" mt="4">
          <NextImage
            src="/assets/home/avataaars.svg"
            width="200"
            height="200"
            priority
          />
        </Box>
        <ContactButton mt="4" />
      </Flex>
    </Flex>
  )
}

export default Hero
