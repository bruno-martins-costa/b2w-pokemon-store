import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-self: flex-end;
`;

export const ButtonElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 10px 16px;
  font-weight: 500;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  outline: none;
  appearance: none;
  border: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  background-position: center;
  background-position: center;
  transition: background 200ms;

  &:active {
    filter: brightness(0.8);
  }

  &:disabled {
    display: none;
  }
`;
