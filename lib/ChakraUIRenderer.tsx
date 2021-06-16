import React from 'react'
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

type PropsType = {
  children?: React.ReactNode
  'data-sourcepos'?: any
}

function getCoreProps(props: PropsType): any {
  return props['data-sourcepos']
    ? { 'data-sourcepos': props['data-sourcepos'] }
    : {}
}

type DefaultsType = {
  paragraph: React.FC
  emphasis: React.FC
  blockquote: React.FC
  code: React.FC<{ language: string; value: string }>
  delete: React.FC
  thematicBreak: React.FC
  link: React.FC<{ href?: string }>
  linkReference: React.FC<{ href?: string }>
  image: React.FC<{ src?: string }>
  imageReference: React.FC<{ src?: string }>
  text: React.FC
  list: React.FC<{ start: number; ordered: boolean; depth: number }>
  listItem: React.FC<{ checked: boolean }>
  definition: React.FC
  heading: React.FC<{ level: number }>
  inlineCode: React.FC
  table: React.FC
  tableHead: React.FC
  tableBody: React.FC
  tableRow: React.FC
  tableCell: React.FC
}

const LinkRenderer: React.FC<{ href?: string }> = ({
  href,
  children,
  ...rest
}) => {
  const isExternal = /^https?:\/\//.test(href?.trim() ?? '')

  return (
    <NextLink href={href ?? ''} passHref>
      <Link {...rest}>
        {children}
        {isExternal && (
          <>
            {' '}
            <ExternalLinkIcon mt="-2px" />
          </>
        )}
      </Link>
    </NextLink>
  )
}

const imageSizeRegex = /\/.+_(?<width>\d+)x(?<height>\d+)\..+$/

const ImageRenderer: React.FC<{ src?: string; alt?: string }> = ({
  src,
  alt,
  ...rest
}) => {
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
      width={width}
      height={height}
      layout="intrinsic"
      {...rest}
    />
  )
}

export const defaults: DefaultsType = {
  // eslint-disable-next-line react/display-name
  paragraph: (props) => {
    const { children } = props
    return (
      <Text mb={2} as="div">
        {children}
      </Text>
    )
  },
  // eslint-disable-next-line react/display-name
  emphasis: (props) => {
    const { children } = props
    return <Text as="em">{children}</Text>
  },
  // eslint-disable-next-line react/display-name
  blockquote: (props) => {
    const { children } = props
    return <Code p={2}>{children}</Code>
  },
  // eslint-disable-next-line react/display-name
  code: ({ language, value }) => (
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
  ),
  // eslint-disable-next-line react/display-name
  delete: (props) => {
    const { children } = props
    return <Text as="del">{children}</Text>
  },
  thematicBreak: Divider,
  link: LinkRenderer,
  linkReference: LinkRenderer,
  image: ImageRenderer,
  imageReference: ImageRenderer,
  // eslint-disable-next-line react/display-name
  text: ({ children }) => <Text as="span">{children}</Text>,
  // eslint-disable-next-line react/display-name
  list: (props) => {
    const { start, ordered, children, depth } = props
    const attrs = getCoreProps(props)
    if (start !== null && start !== 1 && start !== undefined) {
      attrs.start = start.toString()
    }
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
  listItem: (props) => {
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
  definition: () => null,
  // eslint-disable-next-line react/display-name
  heading: (props) => {
    const { level, children } = props
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs']
    return (
      <Heading
        my={4}
        as={`h${level}`}
        size={sizes[+`${level - 1}`]}
        {...getCoreProps(props)}
      >
        {children}
      </Heading>
    )
  },
  // eslint-disable-next-line react/display-name
  inlineCode: (props) => {
    const { children } = props
    return <Code {...getCoreProps(props)}>{children}</Code>
  },
  // eslint-disable-next-line react/display-name
  table: (props) => (
    <Table {...getCoreProps(props)} variant="striped">
      {props.children}
    </Table>
  ),
  // eslint-disable-next-line react/display-name
  tableHead: (props) => (
    <Thead {...getCoreProps(props)}>{props.children}</Thead>
  ),
  // eslint-disable-next-line react/display-name
  tableBody: (props) => (
    <Tbody {...getCoreProps(props)}>{props.children}</Tbody>
  ),
  // eslint-disable-next-line react/display-name
  tableRow: (props) => <Tr {...getCoreProps(props)}>{props.children}</Tr>,
  // eslint-disable-next-line react/display-name
  tableCell: (props) => <Td {...getCoreProps(props)}>{props.children}</Td>,
}

export default function Renderer(theme = defaults): DefaultsType {
  return {
    paragraph: theme.paragraph,
    emphasis: theme.emphasis,
    blockquote: theme.blockquote,
    code: theme.code,
    delete: theme.delete,
    thematicBreak: theme.thematicBreak,
    link: theme.link,
    image: theme.image,
    linkReference: theme.linkReference,
    imageReference: theme.imageReference,
    text: theme.text,
    list: theme.list,
    listItem: theme.listItem,
    definition: theme.definition,
    heading: theme.heading,
    inlineCode: theme.inlineCode,
    table: theme.table,
    tableHead: theme.tableHead,
    tableBody: theme.tableBody,
    tableRow: theme.tableRow,
    tableCell: theme.tableCell,
  }
}
