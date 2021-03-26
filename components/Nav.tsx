import React from 'react'
import {
  Box,
  Link,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  FlexProps,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MdTranslate } from 'react-icons/md'
import { useIsBrowser, useTranslate } from '../lib/hooks'
import { Keys } from '../lib/locales'

const contentLinks: Array<{ href: string; labelKey: Keys }> = [
  { href: '/journal', labelKey: 'nav.journal' },
  { href: '/projects', labelKey: 'nav.projects' },
]

const langLinks = [
  { locale: 'fr', label: 'Français' },
  { locale: 'en', label: 'English' },
]

const Nav: React.FC<FlexProps> = (props) => {
  const _ = useTranslate()
  /**
   * Used to fix menu display error on ssr
   * https://github.com/chakra-ui/chakra-ui/issues/3668
   */
  const isBrowser = useIsBrowser()

  return (
    <Flex as="nav" alignItems="center" {...props}>
      <Flex as="ul" listStyleType="none" alignItems="center">
        {contentLinks.map(({ href, labelKey }) => (
          <Box as="li" display="inline-block" key={href}>
            <NextLink href={href} passHref>
              <Link
                py="2"
                px="3"
                color="gray.700"
                display="inline-block"
                fontWeight="medium"
              >
                {_(labelKey)}
              </Link>
            </NextLink>
          </Box>
        ))}
        <Box as="li" display="inline-block">
          <Menu>
            <MenuButton
              as={Button}
              variant="link"
              color="gray.700"
              fontWeight="medium"
            >
              <Flex as="span" py="2" px="3" alignItems="center">
                <Icon as={MdTranslate} mr="1" />
                <ChevronDownIcon style={{ marginTop: 2 }} />
              </Flex>
            </MenuButton>
            <MenuList as="ul" position={!isBrowser ? 'absolute' : undefined}>
              {langLinks.map(({ locale, label }) => (
                <MenuItem as="li" p="0" key={locale}>
                  <NextLink href="/" locale={locale} passHref>
                    <Link flex="1" px="3" py="2">
                      {label}
                    </Link>
                  </NextLink>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Nav
