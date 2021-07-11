import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  height: auto;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000080;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  border-radius: 5px;
  transition: box-shadow 100ms ease-in-out;
  box-shadow: ${(props) =>
    props.isFocused ? '0 0 0 0.2rem rgb(0, 0, 0, 1)' : ''};
  background-color: #fff;
`;

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 48px;
  z-index: 1;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0 48px 0 48px;
  background-color: transparent;
  position: relative;
  z-index: 2;
  font-size: 16px;
`;

export const ClearIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 50px;
  cursor: pointer;
`;

export const DropdownMenu = styled(motion.div)`
  width: 100%;
  position: absolute;
  margin-top: 16px;
  z-index: 2;
`;
