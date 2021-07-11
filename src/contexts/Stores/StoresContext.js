import { createContext, useReducer, useCallback } from 'react';
import { StoresReducer } from './StoresReducer';

export const StoresContext = createContext();

export function StoresProvider({ children }) {
  const initialState = {
    currentStoreType: { value: '', label: '' },
    storeTypes: [
      { value: 'water', label: 'Água' },
      { value: 'fire', label: 'Fogo' },
      { value: 'grass', label: 'Planta' },
      { value: 'dragon', label: 'Dragão' },
    ],
  };
  const [state, dispatch] = useReducer(StoresReducer, initialState);

  const setCurrentStoreType = useCallback((type) => {
    dispatch({ type: 'SET_CURRENT_STORE_TYPE', payload: type });
  }, []);

  const setClearCurrentStoreType = useCallback(() => {
    dispatch({ type: 'SET_CLEAR_CURRENT_STORE_TYPE' });
  }, []);

  return (
    <StoresContext.Provider
      value={{
        ...state,
        setCurrentStoreType,
        setClearCurrentStoreType,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
}
