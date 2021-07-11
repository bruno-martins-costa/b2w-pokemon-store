import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage(keyName, initialState) {
  const [value, setValue] = useState(() =>
    getSavedValue(keyName, initialState)
  );

  function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  }

  const setValueToLocalStorage = useCallback(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value]);

  useEffect(() => {
    setValueToLocalStorage();
  }, [value, setValueToLocalStorage]);

  return [value, setValue];
}
