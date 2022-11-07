import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import fetchPokemon from '../utils/fetchPokemon';

export const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetchPokemon().then(({ data }) => setPokemons(data.results));
        
    }, [])
    
    const params = useParams()  

    const location = useLocation()
    console.log(location);

  return (
      <div><ul>
          {pokemons.map(pokemon => <li key={pokemon.name}><Link to={`${pokemon.name}`} state={{name: pokemon.name, from: location.state?.from ?? location.pathname}}>{pokemon.name}</Link>
              {params.name === pokemon.name && <Outlet />}</li>)}
      </ul></div>
  )
}
