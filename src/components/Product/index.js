import { capitalizeString, formatCurrency } from '../../utils';
import { Button } from '../';
import {
  Container,
  Content,
  InfoContainer,
  AvatarContainer,
  Avatar,
  Name,
  Price,
} from './styles';
import { Link } from 'react-router-dom';

export function Product({ name, price, image, setCart }) {
  return (
    <Container>
      <Content>
        <Link to={(location) => `${location.pathname}/pokemon/${name}`}>
          <InfoContainer>
            <AvatarContainer>
              <Avatar src={image} loading='lazy' />
            </AvatarContainer>
            <Name>{capitalizeString(name)}</Name>
            <Price>{formatCurrency(price)}</Price>
          </InfoContainer>
        </Link>

        <Button text='Adicionar' handleClick={setCart} />
      </Content>
    </Container>
  );
}
