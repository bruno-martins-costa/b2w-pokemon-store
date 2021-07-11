import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 24px 32px 36px 32px;

  @media (max-width: 480px) {
    padding: 24px 8px 36px 8px;
  }
`;

export const Title = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  padding: 0 16px;
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const Message = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  padding: 0 16px;
  font-size: 18px;
  line-height: 24px;
`;

export const GifAnimation = styled.img`
  width: auto;
  height: 120px;
  margin-bottom: 12px;
`;
