import { api } from './axiosConfig';
import { getService } from './getService';

export const getAllPokemonByType = (type) => {
  return getService(`type/${type}`);
};

export const getPokemonByName = (pokemonName) => {
  return new Promise((resolve) => {
    api
      .get(`pokemon/${pokemonName}`)
      .then((response) => {
        const {
          abilities,
          height,
          base_experience,
          id,
          name,
          weight,
          sprites,
          stats,
        } = response.data;
        resolve({
          abilities,
          height,
          base_experience,
          id,
          name,
          weight,
          sprites,
          stats,
        });
      })
      .catch((error) => console.log('error: ', error));
  });
};

export const getPokemonList = async (pokemonArray) => {
  return Promise.all(
    pokemonArray.map(async ({ pokemon }) => getPokemonByName(pokemon.name))
  );
};

export const getData = async (type, setter) => {
  const data = await getAllPokemonByType(type);
  const { pokemon: pokemonNames } = data;
  const pokemonList = await getPokemonList(pokemonNames);
  setter(pokemonList);
};
