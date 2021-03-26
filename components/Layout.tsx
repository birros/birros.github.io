import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'

const Layout: React.FC = ({ children }) => (
  <>
    <Header
      borderBottom="1px"
      borderBottomColor="gray.200"
      position="fixed"
      width="100%"
      top="0"
      zIndex="2"
    />
    <Container as="main" maxW="container.md" mt="14" py="4">
      {children}
    </Container>
  </>
)

export default Layout
