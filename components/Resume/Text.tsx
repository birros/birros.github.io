import styled from '@emotion/styled'
import React from 'react'
import H2 from './H2'
import Paragraph from './Paragraph'

const Root = styled.section``

interface TextProps {
  data: {
    content: string[]
    title: string
  }
  className?: string
}

const Text: React.FC<TextProps> = ({ data, className }) => {
  return (
    <Root className={className}>
      <H2>{data.title}</H2>
      {data.content.map((item, index) => (
        <Paragraph key={index}>{item}</Paragraph>
      ))}
    </Root>
  )
}

export default Text
