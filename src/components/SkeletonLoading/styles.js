import styled from 'styled-components';

export const Skeleton = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: 5px;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size: 420px 250px, 420px 180px, 100px 100px, 225px 30px;
  background-position: -420px 0, 0 0, 0px 190px, 50px 195px;
  animation: loading 0.5s infinite;

  @keyframes loading {
    to {
      background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
  }
`;
