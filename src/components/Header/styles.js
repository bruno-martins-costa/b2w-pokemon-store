import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 75px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LogoAndStoresContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 220px;
  margin-right: 16px;

  @media (max-width: 1200px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 12px;
  }
`;
