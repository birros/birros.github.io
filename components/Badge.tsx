import { Box, BoxProps } from '@chakra-ui/layout'
import React from 'react'

interface Props {
  icon: React.FC
  label: string
  iconColor: string
}

const Badge: React.FC<Props & BoxProps> = ({
  label,
  icon,
  iconColor,
  ...rest
}) => (
  <Box
    as="span"
    display="inline-flex"
    flexDirection="column"
    alignItems="center"
    {...rest}
  >
    <Box
      as="span"
      backgroundColor="white"
      borderRadius="full"
      p={{ base: 4, sm: 6 }}
      color={iconColor}
      fontSize={{ base: '1.5rem', sm: '2.3rem' }}
    >
      {icon({})}
    </Box>
    <Box as="span" fontSize="0.9rem" fontWeight="semibold" mt="3">
      {label}
    </Box>
  </Box>
)

export default Badge
