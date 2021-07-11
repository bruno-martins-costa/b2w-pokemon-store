import styled from 'styled-components';

export const TotalCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 75px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TotalText = styled.span`
  display: block;
  font-weight: 500;
`;

export const TotalValue = styled.span`
  display: block;
  font-weight: 500;
`;

export const FinishContainer = styled.div`
  button {
    padding: 16px 24px;
    font-size: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    button {
      padding: 24px;
    }
  }
`;
