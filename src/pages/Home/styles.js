import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  max-width: 1200px;
  padding: 32px 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-height: 800px;
  height: 100%;
  padding: 0 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: unset;
    flex-direction: column;
  }
`;

export const TypeLinkContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  width: 50%;
  height: 50%;
  justify-content: center;
  align-items: center;
  padding: 32px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
    padding: 8px;
  }
`;

export const TypeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 32px;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;
  text-decoration: none;
  color: unset;
  color: ${(props) => props.color};
  transition: 100ms ease-in-out;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.color};
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 16px;
    font-size: 24px;
  }
`;
