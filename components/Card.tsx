import { AspectRatio, Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export type CardProps = BoxProps

const Card: React.FC<CardProps> = ({ children, ...rest }) => (
  <Box
    borderRadius="2xl"
    overflow="hidden"
    width="100%"
    position="relative"
    {...rest}
  >
    <AspectRatio ratio={16 / 10}>
      <>{children}</>
    </AspectRatio>
  </Box>
)

export default Card
