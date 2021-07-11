import { Container, Counter } from './styles';

export function CartItemCounter({ quantity }) {
  return (
    <Container className='counter'>
      <Counter>{quantity}</Counter>
    </Container>
  );
}
