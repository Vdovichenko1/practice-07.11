import React, { Component } from 'react'
import { Container } from './Expresso.styled';

export default class Expresso extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

  render() {
    const reviews = Object.keys(this.state)
    console.log(reviews);
    return (
        <Container>
       { reviews.map(review => <button type='button'>{review}</button>)}
        </Container>
    )
  }
}

