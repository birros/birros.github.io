import { AspectRatio, Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

const Card: React.FC<BoxProps> = ({ children, ...rest }) => (
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
