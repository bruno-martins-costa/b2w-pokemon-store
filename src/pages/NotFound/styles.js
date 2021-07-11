import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

export const NotFoundMessage = styled.span`
  display: block;
  font-weight: 500;
  font-size: 64px;
  padding: 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const NotFoundGif = styled.img``;
