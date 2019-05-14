import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 50px;
  text-align: center;
`

export default () => <Title>Hello World!</Title>
