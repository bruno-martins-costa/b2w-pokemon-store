import { Container, AddButton, SubtractButton } from './styles';
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';

export function QuantityInput({ handleSubtractCartItem, handleAddCartItem }) {
  return (
    <Container>
      <SubtractButton onClick={handleSubtractCartItem}>
        <RiSubtractFill size={22} />
      </SubtractButton>
      <AddButton onClick={handleAddCartItem}>
        <RiAddFill size={22} />
      </AddButton>
    </Container>
  );
}
