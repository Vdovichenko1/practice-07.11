import axios from 'axios';
import { Notify } from 'notiflix';
import React, { Component } from 'react';
import FormCart from './components/FormCart/FormCart';
import List from './components/List/List';

export default class ShopCart extends Component {
    state={
        cart: [],
    }
  async componentDidMount() {
   try {
   const fetchItems = await axios.get('https://62becfba0bc9b125615fd0f7.mockapi.io/api/products')
    this.setState({cart:fetchItems.data})
   } catch (error) {
    Notify.failure('Халепа, шось не так');
   }
  }

  render() {
    return (
      <>
        <FormCart />
        <List items={this.state.cart}/>
      </>
    );
  }
}
