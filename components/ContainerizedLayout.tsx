import React from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'

const ContainerizedLayout: React.FC<ContainerProps> = ({
  children,
  ...rest
}) => (
  <Container as="div" maxW="container.md" py="4" {...rest}>
    {children}
  </Container>
)

export default ContainerizedLayout
