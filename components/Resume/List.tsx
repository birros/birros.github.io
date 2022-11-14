import type { FC, PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBirthdayCake,
  faPhone,
  faAt,
  faRss,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import chunk from 'lodash/chunk'
import styled from '@emotion/styled'
import H2 from './H2'

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  font-size: 1.2rem;
`

const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  width: 1rem;
`

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
`

const Link = styled.a`
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`

function getIcon(type: string) {
  switch (type) {
    case 'birthday':
      return faBirthdayCake
    case 'phone':
      return faPhone
    case 'mail':
      return faAt
    case 'github':
      return faGithub
    case 'linkedin':
      return faLinkedin
    case 'website':
      return faRss
    case 'location':
      return faMapMarker
    default:
      return null
  }
}

function getValues(item: { type: string; value: string }) {
  switch (item.type) {
    case 'location':
      const items = item.value.split(', ')
      const groups = chunk(items, 3)
      return groups.map((x) => x.join(', '))
    default:
      return [item.value]
  }
}

function getChild(
  item: string | string[] | { type: string; value: string; link?: string }
) {
  switch (typeof item) {
    case 'string':
      return item
    case 'object':
      if (Array.isArray(item)) {
        return item.join(' • ')
      } else {
        const icon = getIcon(item.type)
        const values = getValues(item)

        const Container: FC<PropsWithChildren> = item.link
          ? ({ children }) => (
              <Link
                href={item.link}
                target={
                  item.link &&
                  (item.link.startsWith('https://') ||
                    item.link.startsWith('https://'))
                    ? '_blank'
                    : ''
                }
              >
                <Item>{children}</Item>
              </Link>
            )
          : ({ children }) => <Item>{children}</Item>

        return (
          <Container>
            {icon && <Icon icon={icon} />}
            {values}
          </Container>
        )
      }
    default:
      return null
  }
}

interface Item {
  type: string
  value: string
}

interface ListProps {
  data: {
    items: (string | string[] | Item)[]
    title: string
  }
  className?: string
}

const List: React.FC<ListProps> = ({ data, className }) => (
  <Root className={className}>
    <H2>{data.title}</H2>
    <Ul>
      {data.items.map((item, index) => (
        <Li key={index}>{getChild(item)}</Li>
      ))}
    </Ul>
  </Root>
)

export default List
