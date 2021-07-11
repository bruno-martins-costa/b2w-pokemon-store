import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 28px 16px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-top: 130px;

  @media (max-width: 768px) {
    padding-top: 150px;
  }

  @media (max-width: 600px) {
    padding: 150px 16px 16px 16px;
  }
`;

export const PokemonContainer = styled(motion.div)`
  display: flex;
  flex-basis: 50%;
  /* border: 1px solid red; */
  padding: 0 16px 0 0;

  @media (max-width: 1200px) {
    flex-basis: 100%;
    padding: 0;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  border-radius: 20px;
  /* border: 1px solid red; */
`;

export const Avatar = styled.img`
  width: auto;
  max-width: 100%;
  margin: auto;
  transform: scale(1.1);
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 36px;
  flex-basis: 100%;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 20px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 24px 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NameAndPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Price = styled.span`
  font-size: 28px;

  @media (max-width: 1200px) {
    font-size: 48px;
  }

  @media (max-width: 960px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Name = styled.span`
  font-size: 36px;

  @media (max-width: 1200px) {
    font-size: 52px;
  }

  @media (max-width: 960px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const WeightAndHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  /* align-items: flex-end; */
`;

export const Weight = styled.span`
  font-size: 20px;

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Height = styled.span`
  font-size: 20px;

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const AddToCartContainer = styled.div`
  display: flex;
  flex: 1;

  button {
    margin-top: auto;
    border-radius: 20px;
    padding: 12px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    button {
      font-size: 20px;
    }
  }

  @media (max-width: 360px) {
    button {
      font-size: 16px;
    }
  }
`;

export const PokemonBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #fff;
  margin: 16px 0;
  padding: 36px;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 16px;
    margin: 8px 0;
  }
`;

export const StatsContainer = styled(motion.div)`
  display: flex;
  flex-basis: 50%;
  /* border: 1px solid red; */
  padding: 0 0 0 16px;

  @media (max-width: 1200px) {
    flex-basis: 100%;
    padding: 0;
  }
`;

export const StatsBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  margin: 16px 0;
  padding: 24px 36px;
  border-radius: 20px;

  @media (max-width: 600px) {
    padding: 16px;
    margin: 8px 0;
  }
`;

export const StatsItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const StatName = styled.div`
  width: 150px;
  font-weight: 500;
  text-align: right;

  @media (max-width: 420px) {
    font-size: 14px;
    width: 130px;
  }
`;

export const StatValue = styled.div`
  text-align: center;
  padding: 0 10px;
  width: 48px;

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

export const StatChart = styled.div`
  flex: 1;
  height: 10px;
  background-color: #ccc;
  border-radius: 5px;
  position: relative;
  margin-right: 16px;
`;

export const Chart = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: ${(props) => (props.width ? props.width : '0')};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
`;

export const MovesContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-basis: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 24px 36px;
  border-radius: 20px;
  margin: 16px 0;

  @media (max-width: 600px) {
    padding: 16px;
    margin: 8px 0;
  }
`;

export const Label = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const MovesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Move = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  border: 1px solid #00000020;
  border-radius: 5px;
  height: fit-content;
  width: fit-content;
  padding: 6px 10px;
  margin-right: 12px;
  margin-bottom: 12px;
  font-size: 14px;
`;
