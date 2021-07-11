import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 24px 32px 36px 32px;
`;

export const Title = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  padding: 0 16px;
  font-size: 24px;
  font-weight: 500;
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
