import React from 'react'
import { Container } from '@chakra-ui/react'

const ContainerizedLayout: React.FC = ({ children }) => (
  <Container as="div" maxW="container.md" py="4">
    {children}
  </Container>
)

export default ContainerizedLayout
