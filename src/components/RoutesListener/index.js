import { useEffect, useContext, useCallback } from 'react';
import { useLocation } from 'react-router';
import { StoresContext, CatalogContext } from '../../contexts';
import {
  getAllPokemonByType,
  getPokemonList,
} from '../../services/apiServices';

export function RoutesListener() {
  const { currentStoreType, storeTypes, setCurrentStoreType } =
    useContext(StoresContext);
  const { catalog, setCatalog } = useContext(CatalogContext);
  const { pathname } = useLocation();

  const currentType = currentStoreType.value;

  const getData = useCallback(async () => {
    const data = await getAllPokemonByType(currentStoreType.value);
    const { pokemon: pokemonNames } = data;
    const pokemonList = await getPokemonList(pokemonNames);
    setCatalog(pokemonList);
  }, [currentStoreType, setCatalog]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const store = storeTypes.find(({ value }) =>
      pathname.includes(`/store/${value}`)
    );
    if (store) setCurrentStoreType(store);
  }, [pathname, storeTypes, setCurrentStoreType]);

  useEffect(() => {
    const shouldGetNewPokemonTypeList = !!currentType && !catalog.length;

    if (shouldGetNewPokemonTypeList) getData();
  }, [pathname, currentType, catalog.length, getData]);

  return null;
}
