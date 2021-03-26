import React from 'react'
import { Box } from '@chakra-ui/react'
import Section from './Section'

const Portfolio: React.FC = () => (
  <Section
    backgroundColor="gray.100"
    header={<>Mes projets récents</>}
    description={
      <>
        <Box as="div">
          Voici quelques projets techs sur lesquels je suis intervenu
          dernièrement.
        </Box>{' '}
        <Box as="div">Vous voulez en savoir plus ? Parlons-en directement…</Box>
      </>
    }
  />
)

export default Portfolio
