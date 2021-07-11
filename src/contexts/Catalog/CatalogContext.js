import { createContext, useReducer, useCallback } from 'react';
import { CatalogReducer } from './CatalogReducer';

export const CatalogContext = createContext();

export function CatalogProvider({ children }) {
  const initialState = {
    catalog: [],
    isLoading: true,
  };
  const [state, dispatch] = useReducer(CatalogReducer, initialState);

  const setCatalog = useCallback((array) => {
    dispatch({ type: 'SET_CATALOG', payload: array });
  }, []);

  const setClearCatalog = useCallback(() => {
    dispatch({ type: 'SET_CLEAR_CATALOG' });
  }, []);

  return (
    <CatalogContext.Provider
      value={{
        ...state,
        setCatalog,
        setClearCatalog,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
}
