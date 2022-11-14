import {
  Text,
  Code,
  Divider,
  Link,
  Checkbox,
  ListItem,
  Heading,
  Image,
  OrderedList,
  UnorderedList,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import type { NormalComponents } from 'react-markdown/lib/complex-types'
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react'

type PropsType = {
  children?: React.ReactNode
  'data-sourcepos'?: any
}

function getCoreProps(props: PropsType): any {
  return props['data-sourcepos']
    ? { 'data-sourcepos': props['data-sourcepos'] }
    : {}
}

type DefaultsType = Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
>

const imageSizeRegex = /\/.+_(?<width>\d+)x(?<height>\d+)\..+$/

export const defaults: DefaultsType = {
  // eslint-disable-next-line react/display-name
  p: (props) => {
    const { children } = props
    return (
      <Text mb={2} as="div">
        {children}
      </Text>
    )
  },
  // eslint-disable-next-line react/display-name
  em: (props) => {
    const { children } = props
    return <Text as="em">{children}</Text>
  },
  // eslint-disable-next-line react/display-name
  blockquote: (props) => {
    const { children } = props
    return <Code p={2}>{children}</Code>
  },
  // eslint-disable-next-line react/display-name
  code: (props) => {
    const { inline, className, children } = props

    if (inline) {
      return <Code {...getCoreProps(props)}>{children}</Code>
    }

    const language = className?.substring('language-'.length)

    const array = Array.isArray(children) ? children : undefined
    const raw = array && array?.length > 0 ? array[0] : undefined
    const value = typeof raw === 'string' ? raw : undefined

    if (!value) {
      return <Code {...getCoreProps(props)}>{children}</Code>
    }

    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={value}
        language={language as Language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            p="4"
            borderRadius="md"
            overflow="auto"
            className={className}
            style={style}
          >
            <Box as="code" display="block">
              {tokens.map((line, i) => (
                <Box key={i} as="div" {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Highlight>
    )
  },
  // eslint-disable-next-line react/display-name
  del: (props) => {
    const { children } = props
    return <Text as="del">{children}</Text>
  },
  hr: Divider,
  // eslint-disable-next-line react/display-name
  a: ({ href, children, ...rest }) => {
    const isExternal = /^https?:\/\//.test(href?.trim() ?? '')

    return (
      <Link as={NextLink} href={href ?? ''} {...rest}>
        {children}
        {isExternal && (
          <>
            {' '}
            <ExternalLinkIcon mt="-2px" />
          </>
        )}
      </Link>
    )
  },
  // eslint-disable-next-line react/display-name
  img: ({ src, alt, placeholder, ...rest }) => {
    const match = imageSizeRegex.exec(src ?? '')
    const [width, height] =
      match && match.groups && match.groups.width && match.groups.height
        ? [Number(match.groups.width), Number(match.groups.height)]
        : [undefined, undefined]

    if (!width || !height) {
      return <Image src={src} alt={alt} {...rest} />
    }

    return (
      <NextImage
        src={src ?? ''}
        width={width as any}
        height={height as any}
        layout="intrinsic"
        alt={alt ?? ''}
        placeholder={placeholder as any}
        {...rest}
      />
    )
  },
  // eslint-disable-next-line react/display-name
  text: ({ children }) => <Text as="span">{children}</Text>,
  // eslint-disable-next-line react/display-name
  ul: (props) => {
    const { ordered, children, depth } = props
    const attrs = getCoreProps(props)
    let Element = UnorderedList
    let styleType = 'disc'
    if (ordered) {
      Element = OrderedList
      styleType = 'decimal'
    }
    if (depth === 1) styleType = 'circle'
    return (
      <Element
        spacing={2}
        as={ordered ? 'ol' : 'ul'}
        styleType={styleType}
        pl={4}
        {...attrs}
      >
        {children}
      </Element>
    )
  },
  // eslint-disable-next-line react/display-name
  ol: (props) => {
    const { ordered, children, depth } = props
    const attrs = getCoreProps(props)
    // if (start !== null && start !== 1 && start !== undefined) {
    //   attrs.start = start.toString()
    // }
    let Element = UnorderedList
    let styleType = 'disc'
    if (ordered) {
      Element = OrderedList
      styleType = 'decimal'
    }
    if (depth === 1) styleType = 'circle'
    return (
      <Element
        spacing={2}
        as={ordered ? 'ol' : 'ul'}
        styleType={styleType}
        pl={4}
        {...attrs}
      >
        {children}
      </Element>
    )
  },
  // eslint-disable-next-line react/display-name
  li: (props) => {
    const { children, checked } = props
    let checkbox = null
    if (checked !== null && checked !== undefined) {
      checkbox = (
        <Checkbox isChecked={checked} isReadOnly>
          {children}
        </Checkbox>
      )
    }
    return (
      <ListItem
        {...getCoreProps(props)}
        listStyleType={checked !== null ? 'none' : 'inherit'}
      >
        {checkbox || children}
      </ListItem>
    )
  },
  // eslint-disable-next-line react/display-name
  h1: (props) => {
    const { children } = props
    return (
      <Heading my={4} as="h1" size="2xl" {...getCoreProps(props)}>
        {children}
      </Heading>
    )
  },
  // eslint-disable-next-line react/display-name
  h2: (props) => {
    const { children } = props
    return (
      <Heading my={4} as="h2" size="xl" {...getCoreProps(props)}>
        {children}
      </Heading>
    )
  },
  // eslint-disable-next-line react/display-name
  h3: (props) => {
    const { children } = props
    return (
      <Heading my={4} as="h3" size="lg" {...getCoreProps(props)}>
        {children}
      </Heading>
    )
  },
  // eslint-disable-next-line react/display-name
  h4: (props) => {
    const { children } = props
    return (
      <Heading my={4} as="h4" size="md" {...getCoreProps(props)}>
        {children}
      </Heading>
    )
  },
  // eslint-disable-next-line react/display-name
  h5: (props) => {
    const { children } = props
    return (
      <Heading my={4} as="h5" size="sm" {...getCoreProps(props)}>
        {children}
      </Heading>
    )
  },
  // eslint-disable-next-line react/display-name
  h6: (props) => {
    const { children } = props
    return (
      <Heading my={4} as="h6" size="xs" {...getCoreProps(props)}>
        {children}
      </Heading>
    )
  },
  // eslint-disable-next-line react/display-name
  table: (props) => (
    <Table {...getCoreProps(props)} variant="striped">
      {props.children}
    </Table>
  ),
  // eslint-disable-next-line react/display-name
  thead: (props) => <Thead {...getCoreProps(props)}>{props.children}</Thead>,
  // eslint-disable-next-line react/display-name
  tbody: (props) => <Tbody {...getCoreProps(props)}>{props.children}</Tbody>,
  // eslint-disable-next-line react/display-name
  tr: (props) => <Tr {...getCoreProps(props)}>{props.children}</Tr>,
  // eslint-disable-next-line react/display-name
  td: (props) => <Td {...getCoreProps(props)}>{props.children}</Td>,
}

export default function Renderer(theme = defaults): DefaultsType {
  return {
    ...theme,
  }
}
