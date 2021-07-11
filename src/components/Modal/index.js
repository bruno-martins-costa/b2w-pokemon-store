import { useContext } from 'react';
import { ModalContext, CartContext, StoresContext } from '../../contexts';
import {
  Container,
  Background,
  ModalWindow,
  ModalContent,
  ModalHeader,
  CloseButton,
} from './styles';
import { AnimatePresence } from 'framer-motion';
import { MdClear } from 'react-icons/md';

export function Modal({ children }) {
  const { isModalOpen, toggleIsModalOpen } = useContext(ModalContext);
  const { clearCartByType, toggleIsCartOpen } = useContext(CartContext);
  const { currentStoreType } = useContext(StoresContext);

  const handleToggleModal = () => {
    if (isModalOpen) clearCartByType({ cartType: currentStoreType.value });
    toggleIsModalOpen();
    toggleIsCartOpen();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Background onClick={handleToggleModal} />
          <ModalWindow
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }}
            transition={{ duration: 0.2 }}
          >
            <ModalHeader>
              <CloseButton onClick={handleToggleModal}>
                <MdClear size={24} color='#000' />
              </CloseButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalWindow>
        </Container>
      )}
    </AnimatePresence>
  );
}
