import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'

const primary = defaultTheme.colors.pink
const secondary = defaultTheme.colors.blue

const theme = extendTheme({
  colors: {
    primary,
    secondary,
  },
  components: {
    Link: {
      baseStyle: {
        color: secondary['400'],
      },
    },
  },
})

export default theme
