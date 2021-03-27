import React from 'react'
import { Box, Container, Flex, Link } from '@chakra-ui/react'
import Section from './Section'
import Card from './Card'
import Work from './Work'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { theme as defaultTheme } from '@chakra-ui/react'
import useScrollIntoView from '../lib/useScrollIntoView'

const works = [
  {
    src: '/assets/home/hole-in-wall.jpg',
    color: defaultTheme.colors.yellow[700],
    title: 'Yvivre',
    description: `Une plateforme collaborative d’élaboration de projet immobilier en copropriété.`,
    href: 'https://yvivre.com/',
  },
  {
    src: '/assets/home/city.jpg',
    color: defaultTheme.colors.red[800],
    title: 'PlugImmo',
    description: 'Une place de marché immobilière.',
    href: 'https://www.plugimmo.pro/',
  },
  {
    src: '/assets/home/light-bulbs.jpg',
    color: defaultTheme.colors.green[700],
    title: 'Comwatt',
    description: 'Un simulateur de consommation énergétique.',
    href: 'https://www.comwatt.com/',
  },
  {
    src: '/assets/home/laptop.jpg',
    color: defaultTheme.colors.blue[900],
    title: 'Muffin',
    description: 'Un CRM utilisé par un réseau associatif.',
    href: 'https://caramia.fr/project/muffin-active-application-muffin',
  },
  {
    src: '/assets/home/hand.png',
    color: defaultTheme.colors.teal[700],
    title: 'Walt',
    description: 'Une plateforme de travail en alternance.',
    href: 'https://walt.community/',
  },
]

const Portfolio: React.FC = () => {
  const { ref, handleClick } = useScrollIntoView()

  return (
    <Section
      backgroundColor="gray.100"
      header={<>Mes projets récents</>}
      description={
        <>
          <Box as="div">
            Voici quelques projets techs sur lesquels je suis intervenu
            dernièrement.
          </Box>{' '}
          <Box as="div">
            Vous voulez en savoir plus ? Parlons-en directement…
          </Box>
        </>
      }
    >
      <Container maxW="container.xl">
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          m="-3"
        >
          {works.map(({ href, color, title, description, src }) => (
            <Work
              key={href}
              href={href}
              title={title}
              description={description}
              src={src}
              color={color}
              maxW="325px"
              m="3"
            />
          ))}

          <Card
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
              <Box>Ajoutons le votre…</Box>
            </Link>
          </Card>
        </Flex>
      </Container>
    </Section>
  )
}

export default Portfolio
