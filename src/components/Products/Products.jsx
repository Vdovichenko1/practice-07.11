import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import products from '../../batadase.json';

export default class Products extends Component {
    
  state = {
    active: '',
  };
  toggleActiveItem = title => {
    this.setState({ active: title });
  };

  render() {
    return (
      <ListGroup as="ul">
        {products.map(({ title }) => (
          <ListGroup.Item
            as="li"
            key={title}
            onClick={() => this.toggleActiveItem(title)}
            active={title === this.state.active}
          >
            {title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
