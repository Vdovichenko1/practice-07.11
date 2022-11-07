import React from 'react';
import { Link } from 'react-router-dom';


export const Navigator = () => {
  return (
      <nav>
          <Link to='/home'>Home</Link>
          <Link to='/pokemonslist'>Pokemons</Link>
      </nav>
      
  )
}
