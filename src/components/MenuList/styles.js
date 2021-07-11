import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuComponent = styled.div`
  border-radius: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
`;

export const MenuListHeader = styled.div`
  padding: 16px 16px;
  font-size: 14px;
  font-weight: 500;
`;

export const PokemonsFound = styled.span`
  display: block;
  padding: 0 8px;
`;

export const NoResultsMessage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
`;

export const MenuListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 0 6px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const MenuListFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 50px;
  font-weight: 500;
  margin-top: 16px;

  button {
    padding: 12px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-top: 24px;

    button {
      padding: 18px;
      font-size: 18px;
    }
  }
`;

export const SeeAllResultsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  letter-spacing: 0.05rem;
  font-size: 14px;
`;
