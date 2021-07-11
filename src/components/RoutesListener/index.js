import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import { StoresContext, CatalogContext } from '../../contexts';
import { getData } from '../../services/apiServices';

export function RoutesListener() {
  const { currentStoreType, storeTypes, setCurrentStoreType } =
    useContext(StoresContext);
  const { catalog, setCatalog } = useContext(CatalogContext);
  const { pathname } = useLocation();

  const currentType = currentStoreType.value;

  useEffect(() => {
    window.scrollTo(0, 0);
    const store = storeTypes.find(({ value }) =>
      pathname.includes(`/store/${value}`)
    );
    if (store) setCurrentStoreType(store);
  }, [pathname, storeTypes, setCurrentStoreType]);

  const shouldGetNewPokemonTypeList = !!currentType && !catalog.length;

  useEffect(() => {
    if (shouldGetNewPokemonTypeList)
      getData(currentStoreType.value, setCatalog);
  }, [
    shouldGetNewPokemonTypeList,
    pathname,
    currentStoreType.value,
    setCatalog,
  ]);

  return null;
}
