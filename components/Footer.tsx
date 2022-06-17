import { Box, BoxProps, Text } from '@chakra-ui/react'
import React from 'react'
import ContainerizedLayout from './ContainerizedLayout'
import { useTranslate } from '../lib/hooks'

const getCurrentYear = () => new Date().getFullYear()

const Footer: React.FC<BoxProps> = (props) => {
  const _ = useTranslate()

  return (
    <Box as="footer" py="4" backgroundColor="gray.100" {...props}>
      <ContainerizedLayout
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <Text color="gray.800">
          {getCurrentYear()} © {_('footer.copyrith')}
        </Text>
      </ContainerizedLayout>
    </Box>
  )
}

export default Footer
