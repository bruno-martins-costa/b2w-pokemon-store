import { useContext } from 'react';
import { CartContext, StoresContext } from '../../contexts';
import { Container, Total } from './styles';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { totalCartItemsReduce } from '../../utils';

export function CartButton() {
  const { carts, isCartOpen, toggleIsCartOpen } = useContext(CartContext);
  const { currentStoreType } = useContext(StoresContext);

  const total = totalCartItemsReduce(carts[currentStoreType.value]);

  return (
    <Container onClick={toggleIsCartOpen} isCartOpen={isCartOpen}>
      <HiOutlineShoppingCart size={24} />
      <Total>{total}</Total>
    </Container>
  );
}
