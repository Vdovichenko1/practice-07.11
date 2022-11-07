import { Home } from 'components/PokemonAPI/pages/Home';
import { Pokemons } from 'components/PokemonAPI/pages/Pokemons';
import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { OnePokemon } from '../OnePokemon/OnePokemon';
import { Navigator } from "../Navigator/Navigator";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <>
                <Navigator />
            <Outlet />
          </>
        }
      >
        <Route index element={<Navigate to='/home'/>} />
              <Route path='home' element={<Home />} />
              <Route path='pokemonslist' element={<Pokemons />}>
                  <Route path=':name' element={<OnePokemon />} />
              </Route>
      </Route>
    </Routes>
  );
};
