import React, { forwardRef } from 'react'
import { Box, Container, Link, List, ListItem } from '@chakra-ui/react'
import Section from './Section'
import Card from './Card'
import Work from './Work'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { theme as defaultTheme } from '@chakra-ui/react'
import useScrollIntoView from '../lib/useScrollIntoView'
import { useTranslate } from '../lib/hooks'
import { Keys } from '../lib/locales'
import { FADE_UP_DELAY } from '../lib/constants'
import FadeUpWhenVisible from './FadeUpWhenVisible'

interface IWork {
  src: string
  color: string
  title: string
  descriptionKey: Keys
  href: string
}

const works: Array<IWork> = [
  {
    src: '/assets/home/hole-in-wall.jpg',
    color: defaultTheme.colors.yellow[700],
    title: 'Yvivre',
    descriptionKey: 'works.yvivre',
    href: 'https://yvivre.com/',
  },
  {
    src: '/assets/home/city.jpg',
    color: defaultTheme.colors.red[800],
    title: 'PlugImmo',
    descriptionKey: 'works.plugimmo',
    href: 'https://www.plugimmo.pro/',
  },
  {
    src: '/assets/home/light-bulbs.jpg',
    color: defaultTheme.colors.green[700],
    title: 'Comwatt',
    descriptionKey: 'works.comwatt',
    href: 'https://www.comwatt.com/',
  },
  {
    src: '/assets/home/laptop.jpg',
    color: defaultTheme.colors.blue[900],
    title: 'Muffin',
    descriptionKey: 'works.muffin',
    href: 'https://caramia.fr/project/muffin-active-application-muffin',
  },
  {
    src: '/assets/home/hand.png',
    color: defaultTheme.colors.teal[700],
    title: 'Walt',
    descriptionKey: 'works.walt',
    href: 'https://walt.community/',
  },
]

const Portfolio: React.FC = () => {
  const { ref, handleClick } = useScrollIntoView()
  const _ = useTranslate()

  return (
    <Section
      backgroundColor="gray.100"
      header={_('portfolio.header')}
      description={
        <>
          <Box as="div">{_('portfolio.descriptionTop')}</Box>{' '}
          <Box as="div">{_('portfolio.descriptionBottom')}</Box>
        </>
      }
    >
      <Container maxW="container.xl">
        <List
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          m="-3"
        >
          {works.map(({ href, color, title, descriptionKey, src }, i) => (
            <Work
              key={href}
              as={forwardRef((props, ref) => (
                <FadeUpWhenVisible
                  ref={ref}
                  as={ListItem}
                  delay={i * FADE_UP_DELAY}
                  {...props}
                />
              ))}
              href={href}
              title={title}
              description={_(descriptionKey)}
              src={src}
              color={color}
              maxW="325px"
              m="3"
            />
          ))}

          <Card
            as={forwardRef((props, ref) => (
              <FadeUpWhenVisible
                ref={ref}
                as={ListItem}
                delay={works.length * FADE_UP_DELAY}
                {...props}
              />
            ))}
            maxW="325px"
            m="3"
            backgroundColor="gray.300"
            borderColor="gray.500"
            borderStyle="dashed"
            borderWidth="2px"
          >
            <Link
              ref={ref}
              href="#contact"
              onClick={handleClick}
              color="gray.600"
              textDecoration="none !important"
            >
              <Box color="gray.600" mr="2">
                <IoIosAddCircleOutline fontSize="2rem" />
              </Box>
              <Box>{_('portfolio.add')}</Box>
            </Link>
          </Card>
        </List>
      </Container>
    </Section>
  )
}

export default Portfolio
