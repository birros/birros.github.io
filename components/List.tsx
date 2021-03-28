import React from 'react'
import { List as ChakraList, ListItem } from '@chakra-ui/react'
import FadeUpWhenVisible from './FadeUpWhenVisible'
import { FADE_UP_DELAY } from '../lib/constants'

const List: React.FC = ({ children }) => (
  <ChakraList display="flex" justifyContent="center" alignItems="center">
    {Array.isArray(children)
      ? children.map((child, i) => (
          <FadeUpWhenVisible
            key={i}
            as={ListItem}
            mx={{ base: 4, sm: 6 }}
            delay={i * FADE_UP_DELAY}
          >
            {child}
          </FadeUpWhenVisible>
        ))
      : children}
  </ChakraList>
)

export default List
