import styled from '@emotion/styled'
import React from 'react'
import Event from './Event'
import H2 from './H2'

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface Item {
  period?: string
  title?: string
  location?: string
  content?: string[]
}

interface EventsProps {
  data: {
    items: Item[]
    title: string
  }
}

const Events: React.FC<EventsProps> = ({ data }) => (
  <Root>
    <H2>{data.title}</H2>
    {data.items.map((item, index) => (
      <Event key={index} data={item} />
    ))}
  </Root>
)

export default Events
