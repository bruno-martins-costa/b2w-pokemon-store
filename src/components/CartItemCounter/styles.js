import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  position: absolute;
  bottom: -2px;
  right: 4px;
`;

export const Counter = styled.span`
  display: block;
  text-align: center;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
`;
