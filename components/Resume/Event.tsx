import styled from '@emotion/styled'
import React from 'react'
import Paragraph from './Paragraph'

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const H3 = styled.h3`
  font-size: 1.1rem;
  display: flex;
  font-weight: bold;
`

const Title = styled.span`
  flex: 1;
`

interface EventProps {
  data: {
    content?: string[]
    title?: string
    period?: string
    location?: string
  }
}

const Event: React.FC<EventProps> = ({ data }) => (
  <Root>
    <H3>
      <Title>{data.title}</Title>
      <span>{data.period}</span>
    </H3>
    {data.location && <Paragraph>{data.location}</Paragraph>}
    {data.content &&
      data.content.map((item, index) => (
        <Paragraph key={index}>{item}</Paragraph>
      ))}
  </Root>
)

export default Event
