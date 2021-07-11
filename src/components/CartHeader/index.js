import { Container, Title, TotalItems, IconContainer } from './styles';
import { MdClear } from 'react-icons/md';

export function CartHeader({ totalCartItems, toggleIsCartOpen }) {
  return (
    <Container>
      <Title>{`Carrinho`}</Title>
      {!!totalCartItems && (
        <TotalItems>
          {`${totalCartItems} ${totalCartItems > 1 ? 'itens' : 'item'}`}
        </TotalItems>
      )}

      <IconContainer onClick={toggleIsCartOpen}>
        <MdClear size={24} />
      </IconContainer>
    </Container>
  );
}
