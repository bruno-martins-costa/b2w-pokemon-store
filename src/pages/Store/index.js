import { useContext, useMemo, useCallback, useEffect } from 'react';
import { CatalogContext, StoresContext, CartContext } from '../../contexts';
import { useLocation } from 'react-router';
import {
  getAllPokemonByType,
  getPokemonList,
} from '../../services/apiServices';
import { Catalog, CatalogLoading, Product } from '../../components';
import { parseQueryString } from '../../utils';
import { Container } from './styles';

export function Store({ match }) {
  const { catalog, isLoading, setCatalog } = useContext(CatalogContext);
  const { createItemIntoCartByType } = useContext(CartContext);
  const { storeTypes, setCurrentStoreType } = useContext(StoresContext);

  const { search } = useLocation();
  const filter = parseQueryString(search);
  const filterName = filter?.name?.toLowerCase();
  const currentType = match.params.type;

  const catalogMemo = useMemo(
    () =>
      catalog
        .filter((item) => item.name.toLowerCase().includes(filterName || ''))
        .map(({ name, weight: price, sprites }, index) => (
          <Product
            key={index}
            name={name}
            price={price}
            image={sprites.other['official-artwork'].front_default}
            setCart={() =>
              createItemIntoCartByType({
                name,
                price,
                image: sprites.other['official-artwork'].front_default,
                cartType: currentType,
              })
            }
          />
        )),
    [catalog, createItemIntoCartByType, filterName, currentType]
  );

  const getData = useCallback(async () => {
    const data = await getAllPokemonByType(currentType);
    const { pokemon: pokemonNames } = data;
    const pokemonList = await getPokemonList(pokemonNames);
    setCatalog(pokemonList);
  }, [currentType, setCatalog]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const type = storeTypes.find((type) => type.value === currentType);
    setCurrentStoreType(type);
  }, [storeTypes, setCurrentStoreType, currentType]);

  return (
    <Container>
      {isLoading && <CatalogLoading />}
      {!isLoading && <Catalog>{catalogMemo}</Catalog>}
    </Container>
  );
}
