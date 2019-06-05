import React, { Component } from 'react'
import styled from 'styled-components'
import { RecipeCard } from 'marley-spoon-ui'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.pepper_black_35};
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 50px;
  text-align: center;
`

export default class Index extends Component {
  render () {
    console.log(this.props)

    return (
      <>
        <Title>Hello World!</Title>
        <RecipeCard image={{url: "asdf"}} />
      </>
    )
  }
}
