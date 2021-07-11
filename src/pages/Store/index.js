import { useContext, useMemo, useEffect } from 'react';
import { CatalogContext, StoresContext, CartContext } from '../../contexts';
import { useLocation } from 'react-router';
import { getData } from '../../services/apiServices';
import { Catalog, CatalogLoading, Product } from '../../components';
import { parseQueryString } from '../../utils';
import { Container } from './styles';

export function Store({ match }) {
  const { catalog, isLoading, setCatalog } = useContext(CatalogContext);
  const { createItemIntoCartByType } = useContext(CartContext);
  const { storeTypes, setCurrentStoreType, currentStoreType } =
    useContext(StoresContext);

  const { search } = useLocation();
  const filter = parseQueryString(search);
  const filterName = filter?.name?.toLowerCase();
  const currentType = match.params.type;
  console.log('catalog: ', catalog);
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

  useEffect(() => {
    if (currentStoreType.value !== currentType) {
      getData(currentType, setCatalog);
    }
  }, [currentType, currentStoreType.value, setCatalog]);

  useEffect(() => {
    const type = storeTypes.find(({ value }) => value === currentType);
    setCurrentStoreType(type);
  }, [storeTypes, setCurrentStoreType, currentType]);

  return (
    <Container>
      {isLoading && <CatalogLoading />}
      {!isLoading && <Catalog>{catalogMemo}</Catalog>}
    </Container>
  );
}
