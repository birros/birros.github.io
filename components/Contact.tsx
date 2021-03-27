import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import IconMalt from './IconMalt'
import { Link } from '@chakra-ui/react'
import React from 'react'
import Section from './Section'
import Badge from './Badge'
import NextLink from 'next/link'
import List from './List'
import { useTranslate } from '../lib/hooks'
import { IconType } from 'react-icons'
import { Keys } from '../lib/locales'

interface ILink {
  label?: string
  labelKey?: Keys
  href: string
  icon: IconType | React.FC<React.SVGProps<SVGSVGElement>>
}

export const socialLinks: Array<ILink> = [
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
    labelKey: 'contact.email',
    href: 'mailto:contact@julienmuret.fr',
    icon: HiOutlineMail,
  },
]

const Contact: React.FC = () => {
  const _ = useTranslate()

  return (
    <Section
      id="contact"
      backgroundColor="primary.500"
      color="white"
      header={_('contact.header')}
      description={_('contact.description')}
    >
      <List>
        {socialLinks.map(({ label, labelKey, icon, href }) => (
          <NextLink href={href} key={href} passHref>
            <Badge
              as={(props) => <Link {...props} target="_blank" />}
              label={labelKey ? _(labelKey) : label ?? ''}
              iconColor="primary.500"
              icon={icon}
              color="white"
            />
          </NextLink>
        ))}
      </List>
    </Section>
  )
}

export default Contact
