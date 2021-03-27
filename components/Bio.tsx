import React from 'react'
import { Box } from '@chakra-ui/react'
import Section from './Section'
import { SiGraphql, SiReact, SiTypescript } from 'react-icons/si'
import Badge from './Badge'
import List from './List'
import { useTranslate } from '../lib/hooks'

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

const Bio: React.FC = () => {
  const _ = useTranslate()

  return (
    <Section
      backgroundColor="secondary.500"
      color="white"
      header={
        <>
          <Box as="span" whiteSpace="nowrap">
            {_('bio.headerLeft')}
          </Box>{' '}
          <Box as="span" whiteSpace="nowrap">
            {_('bio.headerRight')}
          </Box>
        </>
      }
      description={_('bio.description')}
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
}

export default Bio
