import { Container, ButtonElement } from './styles';

export function Button({ text, handleClick, disabled }) {
  return (
    <Container>
      <ButtonElement onClick={handleClick} disabled={disabled}>
        {text}
      </ButtonElement>
    </Container>
  );
}
