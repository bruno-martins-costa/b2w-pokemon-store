import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Name, Price } from '../Product/styles';

export const OptionLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  flex-basis: 50%;
  text-decoration: none;
  color: unset;
  transition: color 50ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const OptionAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;

  @media (max-width: 540px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const OptionAvatar = styled.img`
  width: auto;
  max-width: 150px;
  transform: scale(0.4);

  @media (max-width: 540px) {
    transform: scale(0.3);
  }
`;

export const OptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  @media (max-width: 540px) {
    margin-left: 12px;
  }
`;

export const OptionName = styled(Name)`
  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

export const OptionPrice = styled(Price)`
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;
