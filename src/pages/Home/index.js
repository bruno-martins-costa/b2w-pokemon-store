import { useCallback, useContext, useEffect } from 'react';
import { StoresContext, CatalogContext } from '../../contexts';
import { useTheme } from '../../hooks/useTheme';
import {
  Container,
  LinksContainer,
  TypeLink,
  TypeLinkContainer,
} from './styles';

export function Home() {
  const {
    currentStoreType,
    storeTypes,
    setCurrentStoreType,
    setClearCurrentStoreType,
  } = useContext(StoresContext);
  const { catalog, setClearCatalog } = useContext(CatalogContext);

  const { themes } = useTheme();

  const handleSetStoreType = (type) => {
    const typeToSet = storeTypes.find(({ value }) => value === type.value);
    setCurrentStoreType(typeToSet);
  };

  const clearCatalogAndStoreType = useCallback(() => {
    if (!!catalog.length) setClearCatalog();
    if (!!currentStoreType.value) setClearCurrentStoreType();
  }, [
    catalog.length,
    currentStoreType.value,
    setClearCatalog,
    setClearCurrentStoreType,
  ]);

  useEffect(() => {
    clearCatalogAndStoreType();
  }, [clearCatalogAndStoreType]);

  return (
    <Container>
      <LinksContainer>
        {storeTypes.map(({ value, label }) => {
          return (
            <TypeLinkContainer key={value}>
              <TypeLink
                to={`/store/${value}`}
                color={themes[value].colors.primary}
                onClick={() => handleSetStoreType({ value, label })}
              >
                {label}
              </TypeLink>
            </TypeLinkContainer>
          );
        })}
      </LinksContainer>
    </Container>
  );
}
