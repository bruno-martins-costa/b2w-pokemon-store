import { createContext, useReducer, useCallback, useEffect } from 'react';
import { CartReducer } from './CartReducer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { toast } from 'react-toastify';
import { capitalizeString } from '../../utils';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const initialState = {
    isCartOpen: false,
    carts: {
      water: [],
      fire: [],
      grass: [],
      dragon: [],
    },
  };
  const [localStorageCarts, setLocalStorageCarts] = useLocalStorage(
    'carts',
    initialState.carts
  );
  const [state, dispatch] = useReducer(CartReducer, {
    ...initialState,
    carts: { ...localStorageCarts },
  });

  const toggleIsCartOpen = useCallback(() => {
    dispatch({ type: 'TOGGLE_IS_CART_OPEN' });
  }, []);

  const createItemIntoCartByType = useCallback((item) => {
    dispatch({ type: 'CREATE_ITEM_INTO_CART_BY_TYPE', payload: item });
    toast.success(`${capitalizeString(item.name)} foi adicionado ao carrinho!`);
  }, []);

  const addItemFromCart = useCallback(({ name, cartType }) => {
    dispatch({ type: 'ADD_ITEM_FROM_CART', payload: { name, cartType } });
  }, []);

  const subtractItemFromCart = useCallback(({ name, cartType }) => {
    dispatch({ type: 'SUBTRACT_ITEM_FROM_CART', payload: { name, cartType } });
  }, []);

  const clearCartByType = useCallback((type) => {
    dispatch({ type: 'CLEAR_CART_BY_TYPE', payload: type });
  }, []);

  useEffect(() => {
    setLocalStorageCarts(state.carts);
  }, [state.carts, setLocalStorageCarts]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        toggleIsCartOpen,
        createItemIntoCartByType,
        addItemFromCart,
        subtractItemFromCart,
        clearCartByType,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
