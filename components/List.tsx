import React from 'react'
import { Box, List as ChakraList, ListItem } from '@chakra-ui/react'

const List: React.FC = ({ children }) => (
  <ChakraList display="flex" justifyContent="center" alignItems="center">
    {Array.isArray(children)
      ? children.map((child) => (
          <Box as={ListItem} mx={{ base: 4, sm: 6 }}>
            {child}
          </Box>
        ))
      : children}
  </ChakraList>
)

export default List
