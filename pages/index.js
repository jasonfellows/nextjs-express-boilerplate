import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 50px;
  text-align: center;
`

export default class Index extends Component {
  render () {
    return (
      <>
        <Title>Hello World!</Title>
      </>
    )
  }
}
