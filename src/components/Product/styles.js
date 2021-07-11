import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 20%;
  width: 240px;
  height: auto;
  padding: 8px;

  @media (max-width: 1500px) {
    flex-basis: 25%;
  }

  @media (max-width: 1200px) {
    flex-basis: 33.33%;
  }

  @media (max-width: 920px) {
    flex-basis: 50%;
  }

  @media (max-width: 768px) {
    flex-basis: 50%;
  }

  @media (max-width: 440px) {
    flex-basis: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;

  a {
    display: flex;
    height: 100%;
    text-decoration: none;
    color: #000;
  }

  button {
    letter-spacing: 0.05em;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  @media (max-width: 768px) {
    button {
      padding: 16px;
      font-size: 16px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 170px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 8px;
  border-radius: 20px;
`;

export const Avatar = styled.img`
  width: auto;
  max-width: 150px;
  transform: scale(1);
`;

export const Name = styled.span`
  display: block;
  font-size: 16px;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`;

export const Price = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
`;
