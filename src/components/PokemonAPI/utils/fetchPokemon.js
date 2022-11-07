import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemon = async name => {
  try {
    return await axios.get(name ? name : '');
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchPokemon;
