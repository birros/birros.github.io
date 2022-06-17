import styled from '@emotion/styled'
import React from 'react'

const HeaderRoot = styled.header``

const Name = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
`

const Job = styled.p`
  font-size: 1.2rem;
`

interface HeaderProps {
  data: {
    name: string
    job: string
  }
  className?: string
}

const Header: React.FC<HeaderProps> = ({ data, className }) => (
  <HeaderRoot className={className}>
    <Name>{data.name}</Name>
    <Job>{data.job}</Job>
  </HeaderRoot>
)

export default Header
