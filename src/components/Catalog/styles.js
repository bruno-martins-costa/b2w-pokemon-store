import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1200px;
  flex: 1;
  margin: 0 auto;
  overflow: auto;
  padding: 42px 8px;

  @media (max-width: 1200px) {
    padding: 24px 8px;
  }

  @media (max-width: 768px) {
    padding: 24px 8px;
  }
`;
