import { Container, Icon } from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo96.png';

export function Logo() {
  return (
    <Container>
      <Link to='/'>
        <Icon src={logo} />
      </Link>
    </Container>
  );
}
