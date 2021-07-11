import { useLocation } from 'react-router';
import { Container } from './styles';
import { Logo } from '../';
import { SearchInput } from '../';
import { CartButton } from '../';

export function Header() {
  const { pathname } = useLocation();
  if (pathname === '/') return null;

  return (
    <Container>
      <Logo />
      <SearchInput />
      <CartButton />
    </Container>
  );
}
