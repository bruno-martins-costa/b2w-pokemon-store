import { createContext, useReducer } from 'react';
import { ModalReducer } from './ModalReducer';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const initialModal = {
    isModalOpen: false,
  };

  const [modal, dispatch] = useReducer(ModalReducer, initialModal);

  const toggleIsModalOpen = () => {
    dispatch({ type: 'SET_IS_MODAL_OPEN' });
  };

  return (
    <ModalContext.Provider value={{ ...modal, toggleIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
