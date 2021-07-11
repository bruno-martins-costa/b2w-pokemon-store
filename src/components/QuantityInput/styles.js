import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-right: 12px;
`;

export const SubtractButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  margin-right: 2px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};

  &:active {
    filter: brightness(0.8);
  }

  & > svg {
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media (max-width: 340px) {
    width: 26px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  margin-left: 2px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};

  &:active {
    filter: brightness(0.8);
  }

  & > svg {
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media (max-width: 340px) {
    width: 26px;
  }
`;
