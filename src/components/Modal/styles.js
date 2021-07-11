import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000050;
  z-index: 7;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalWindow = styled.div`
  min-width: 360px;
  min-height: fit-content;
  background-color: #fff;
  border-radius: 5px;
  z-index: 5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const ModalHeader = styled.div`
  display: flex;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  appearance: none;
  padding: 12px 12px;
  margin-left: auto;
  cursor: pointer;
`;

export const ModalContent = styled.div``;
