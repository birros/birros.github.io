import React, { forwardRef } from 'react'
import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'
import ContainerizedLayout from './ContainerizedLayout'
import FadeUpWhenVisible from './FadeUpWhenVisible'

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
      <FadeUpWhenVisible
        // eslint-disable-next-line react/display-name
        as={forwardRef((props, ref) => (
          <Heading ref={ref} as="h2" size="lg" textAlign="center" {...props} />
        ))}
      >
        {header}
      </FadeUpWhenVisible>
      <FadeUpWhenVisible
        // eslint-disable-next-line react/display-name
        as={forwardRef((props, ref) => (
          <Text ref={ref} textAlign="center" mt={6} {...props} />
        ))}
      >
        {description}
      </FadeUpWhenVisible>
    </ContainerizedLayout>
    {children}
  </Box>
)

export default Section
