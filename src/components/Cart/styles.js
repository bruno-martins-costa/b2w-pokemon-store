import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 450px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: height 200ms ease-in-out;
  z-index: 3;

  @media (max-width: 768px) {
    flex-basis: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    top: unset;
    left: 0;
    height: ${(props) => (props.isCartOpen ? '100%' : '104px')};
    width: 100%;
    z-index: 3;
  }
`;

export const EmptyMessage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px 16px;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  overflow: auto;

  @media (max-width: 768px) {
    flex: ${(props) => (props.isCartOpen ? '1' : '0')};
  }
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 400px) {
    padding: 8px 12px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ValueInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

export const Avatar = styled.img`
  display: block;
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Name = styled.span`
  display: block;
  font-size: 14px;
`;

export const Price = styled.span`
  display: block;
  font-size: 14px;
`;
