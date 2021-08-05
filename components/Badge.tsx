import React, { forwardRef } from 'react'
import { Box, BoxProps } from '@chakra-ui/layout'

interface Props {
  icon: React.FC
  label: string
  iconColor: string
}

const Badge = forwardRef<HTMLDivElement, Props & BoxProps>(
  ({ label, icon, iconColor, as, ...rest }, ref) => (
    <Box
      ref={ref}
      as={as ?? 'span'}
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      mb="8"
      borderRadius="full"
      p={{ base: 4, sm: 6 }}
      fontSize={{ base: '1.5rem', sm: '2.3rem' }}
      position="relative"
      backgroundColor="white"
      {...rest}
    >
      <Box as="span" color={iconColor}>
        {icon({})}
      </Box>
      <Box
        as="span"
        fontSize="0.9rem"
        fontWeight="semibold"
        position="absolute"
        bottom="-8"
      >
        {label}
      </Box>
    </Box>
  )
)

Badge.displayName = 'Badge'

export default Badge
