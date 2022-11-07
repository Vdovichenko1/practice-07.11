import fetchPokemon from 'components/PokemonAPI/utils/fetchPokemon';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const OnePokemon = () => {
    const [pokemon, setPokemon] = useState('')

    const location = useLocation()
    const pokemonName = location.state.name;
    useEffect(() => {
        if (pokemonName) {
          fetchPokemon(pokemonName).then(({data})=> setPokemon(data.sprites.front_default))
      }
    }, [pokemonName])
    
    const navigate = useNavigate()

  return (
      <div><img src={pokemon} alt={pokemonName} width='200' />
          <button onClick={()=> {navigate(location.state.from || '/home') }} type='button'>Close</button>
      </div>
  )
}
