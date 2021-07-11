import { useState, useContext } from 'react';
import {
  waterTheme,
  fireTheme,
  grassTheme,
  dragonTheme,
  defaultTheme,
} from '../styles/themes';
import { StoresContext } from '../contexts/Stores/StoresContext';

export function useTheme() {
  const initialState = {
    water: waterTheme,
    fire: fireTheme,
    grass: grassTheme,
    dragon: dragonTheme,
  };
  const [state] = useState(initialState);

  const { currentStoreType } = useContext(StoresContext);

  return {
    theme: state[currentStoreType?.value] || defaultTheme,
    themes: state,
  };
}
