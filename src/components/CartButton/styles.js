import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 64px;
  width: 64px;
  margin-left: 12px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.isCartOpen ? '#fff' : '#ffffff90')};
  transition: background-color 100ms ease-in-out;
  border: none;
  appearance: none;
  position: relative;

  &:hover {
    background-color: ${(props) => (props.isCartOpen ? '#ffffff90' : '#fff')};
  }

  & > svg {
    color: ${(props) =>
      props.isCartOpen ? '#fff' : props.theme.colors.primary};
    transition: color 100ms ease-in-out;
  }

  @media (max-width: 768px) {
    position: absolute;
    right: 16px;
    top: 12px;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -2px;
  right: -2px;
  background-color: #ef4036;
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 2px solid #fff;
`;
