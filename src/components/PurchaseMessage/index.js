import { useContext } from 'react';
import { CartContext, StoresContext } from '../../contexts';
import { Container, Title, Message, GifAnimation } from './styles';
import pikachu from '../../assets/pikachu.gif';
import {
  computeCashback,
  formatCurrency,
  totalCartPriceReduce,
} from '../../utils';
import { AnimatePresence } from 'framer-motion';

export function PurchaseMessage() {
  const { carts } = useContext(CartContext);
  const { currentStoreType } = useContext(StoresContext);
  const total = totalCartPriceReduce(carts[currentStoreType.value]);
  const cashback = formatCurrency(computeCashback(total));

  const framerOptions = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {!!total && (
        <Container {...framerOptions}>
          <Title>{`Obrigado por comprar com a gente!`}</Title>
          <Message>{`Você ganhou ${cashback} de volta na sua Pokéconta!`}</Message>
          <GifAnimation src={pikachu} alt='Animação gif de um Pikachu feliz' />
        </Container>
      )}
    </AnimatePresence>
  );
}
