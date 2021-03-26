import React from 'react'
import { Box } from '@chakra-ui/react'
import Section from './Section'
import { SiGraphql, SiReact, SiTypescript } from 'react-icons/si'
import Badge from './Badge'
import List from './List'

const skills = [
  {
    label: 'React',
    icon: SiReact,
  },
  {
    label: 'TypeScript',
    icon: SiTypescript,
  },
  {
    label: 'GraphQL',
    icon: SiGraphql,
  },
]

const Bio: React.FC = () => (
  <Section
    backgroundColor="secondary.500"
    color="white"
    header={
      <>
        <Box as="span" whiteSpace="nowrap">
          Je m'appelle Julien,
        </Box>{' '}
        <Box as="span" whiteSpace="nowrap">
          ravis de vous rencontrer.
        </Box>
      </>
    }
    description={
      <>
        Passionné d'informatique depuis mes études en mathématiques, j’ai
        principalement développé mes compétences en autodidacte. Riche
        d'expériences en agence web et au fil de projets réalisés au contact de
        différents clients j'ai acquis la conviction que la transparence, la
        rigueur et l'écoute peuvent déplacer des montagnes.
      </>
    }
  >
    <List>
      {skills.map(({ label, icon }) => (
        <Badge
          key={label}
          label={label}
          iconColor="secondary.500"
          icon={icon}
        />
      ))}
    </List>
  </Section>
)

export default Bio
