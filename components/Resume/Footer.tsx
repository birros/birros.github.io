import styled from '@emotion/styled'
import React from 'react'

const Root = styled.footer`
  font-size: 0.8rem;
  color: gray;
`

interface Props {
  data: string
}

const Footer: React.FC<Props> = ({ data }) => <Root>{data}</Root>

export default Footer
