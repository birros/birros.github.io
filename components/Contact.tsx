import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import IconMalt from './IconMalt'
import { Link } from '@chakra-ui/react'
import React from 'react'
import Section from './Section'
import Badge from './Badge'
import NextLink from 'next/link'
import List from './List'

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/julien-muret-5882591a1/',
    icon: FaLinkedin,
  },
  {
    label: 'Malt',
    href: 'https://www.malt.fr/profile/julienmuret',
    icon: IconMalt,
  },
  {
    label: 'Courriel',
    href: 'mailto:contact@julienmuret.fr',
    icon: HiOutlineMail,
  },
]

const Contact: React.FC = () => (
  <Section
    id="contact"
    backgroundColor="primary.500"
    color="white"
    header={<>Me contacter</>}
    description={
      <>Pour me contacter veuillez utiliser un des liens suivants.</>
    }
  >
    <List>
      {socialLinks.map(({ label, icon, href }) => (
        <NextLink href={href} key={href} passHref>
          <Badge
            as={(props) => <Link {...props} target="_blank" />}
            label={label}
            iconColor="primary.500"
            icon={icon}
            color="white"
          />
        </NextLink>
      ))}
    </List>
  </Section>
)

export default Contact
