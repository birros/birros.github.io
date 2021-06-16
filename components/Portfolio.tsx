import React, { forwardRef, useMemo } from 'react'
import { Box, Container, Link, List, ListItem } from '@chakra-ui/react'
import Section from './Section'
import Card from './Card'
import Work, { WorkProps } from './Work'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { theme as defaultTheme } from '@chakra-ui/react'
import useScrollIntoView from '../lib/useScrollIntoView'
import { useTranslate } from '../lib/hooks'
import { Keys } from '../lib/locales'
import { FADE_UP_DELAY } from '../lib/constants'
import FadeUpWhenVisible from './FadeUpWhenVisible'
import parseColor from '../lib/parseColor'

interface IWork extends Omit<WorkProps, 'description'> {
  descriptionKey: Keys
}

const works: Array<IWork> = [
  {
    src: '/assets/home/hole-in-wall.jpg',
    colorScheme: defaultTheme.colors.yellow,
    title: 'Yvivre',
    descriptionKey: 'works.yvivre',
    href: 'https://yvivre.com/',
  },
  {
    src: '/assets/home/city.jpg',
    colorScheme: defaultTheme.colors.red,
    title: 'PlugImmo',
    descriptionKey: 'works.plugimmo',
    href: 'https://www.plugimmo.pro/',
  },
  {
    src: '/assets/home/light-bulbs.jpg',
    colorScheme: defaultTheme.colors.green,
    title: 'Comwatt',
    descriptionKey: 'works.comwatt',
    href: 'https://www.comwatt.com/',
  },
  {
    src: '/assets/home/laptop.jpg',
    colorScheme: defaultTheme.colors.blue,
    title: 'Muffin',
    descriptionKey: 'works.muffin',
    href: 'https://caramia.fr/project/muffin-active-application-muffin',
  },
  {
    src: '/assets/home/hand.png',
    colorScheme: defaultTheme.colors.teal,
    title: 'Walt',
    descriptionKey: 'works.walt',
    href: 'https://walt.community/',
  },
]

const Portfolio: React.FC = () => {
  const { ref, handleClick } = useScrollIntoView()
  const _ = useTranslate()

  const bgColor = useMemo(() => {
    const c = parseColor(defaultTheme.colors.gray[300])
    return `rgba(${c.r}, ${c.g}, ${c.b}, 0.9)`
  }, [])

  const bgColorHover = useMemo(() => {
    const c = parseColor(defaultTheme.colors.gray[400])
    return `rgba(${c.r}, ${c.g}, ${c.b}, 0.9)`
  }, [])

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
          {works.map(({ href, colorScheme, title, descriptionKey, src }, i) => (
            <Work
              key={href}
              // eslint-disable-next-line react/display-name
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
              colorScheme={colorScheme}
              maxW="325px"
              m="3"
            />
          ))}

          <Card
            // eslint-disable-next-line react/display-name
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
              backgroundColor={bgColor}
              _hover={{
                backgroundColor: bgColorHover,
              }}
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
