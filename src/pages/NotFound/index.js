import { Container, NotFoundGif, NotFoundMessage } from './styles';
import notFoundGif from '../../assets/slowpoke.gif';

export function NotFound() {
  return (
    <Container>
      <NotFoundMessage>Ops... Página não encontrada</NotFoundMessage>
      <NotFoundGif src={notFoundGif} />
    </Container>
  );
}
