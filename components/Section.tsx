import React from 'react'
import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'
import ContainerizedLayout from './ContainerizedLayout'

interface Props {
  header: React.ReactNode
  description: React.ReactNode
}

const Section: React.FC<Props & BoxProps> = ({
  header,
  description,
  children,
  ...rest
}) => (
  <Box py={{ base: 12, sm: 24 }} {...rest}>
    <ContainerizedLayout mb={children ? { base: 8, sm: 12 } : undefined}>
      <Heading as="h2" size="lg" textAlign="center">
        {header}
      </Heading>
      <Text textAlign="center" mt={6}>
        {description}
      </Text>
    </ContainerizedLayout>
    {children}
  </Box>
)

export default Section