import React from 'react'
import { Link, Flex, Spacer, FlexProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import Nav from './Nav'

const Header: React.FC<FlexProps> = (props) => (
  <Flex as="header" backgroundColor="white" px={{ base: 0, sm: 1 }} {...props}>
    <NextLink href="/" passHref>
      <Link fontSize="xl" fontWeight="semibold" py="3" px="5" color="gray.700">
        Birros
      </Link>
    </NextLink>
    <Spacer />
    <Nav overflow="auto" px="2" />
  </Flex>
)

export default Header
