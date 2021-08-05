import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'
import { vantaGlobalStyles } from './useVantaWaves'

const primary = defaultTheme.colors.pink
const secondary = defaultTheme.colors.blue

const theme = extendTheme({
  styles: {
    global: {
      ...vantaGlobalStyles,
    },
  },
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
