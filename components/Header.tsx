import React from 'react'
import { Link, Flex, Spacer, FlexProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import Nav from './Nav'
import NextImage from 'next/image'

const Header: React.FC<FlexProps> = (props) => (
  <Flex as="header" backgroundColor="white" {...props} minH="14">
    <Flex as="span" alignItems="center" justifyContent="center" p="1">
      <Link
        as={NextLink}
        href="/"
        fontSize="lg"
        fontWeight="semibold"
        py="2"
        px="3"
        color="gray.700"
        alignItems="center"
        justifyContent="center"
        display="inline-flex"
      >
        <NextImage
          src="/favicon.svg"
          height={30}
          width={30}
          alt="Julien Muret"
          priority
        />
      </Link>
    </Flex>
    <Spacer />
    <Nav overflow="auto" p="1" />
  </Flex>
)

export default Header
