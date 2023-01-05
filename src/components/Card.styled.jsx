import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  display: block;
  border: 2px solid white;
  border-radius: 6px;
`;

export const CardDiv = styled.div`
  position: relative;
`;

export const Front = styled(Img)`
  position: absolute;
  transform: rotateY(90deg);
  background: #f0f2f0;
  background: -webkit-linear-gradient(to right, #000c40, #f0f2f0);
  background: linear-gradient(to right, #000c40, #f0f2f0);
  transition: transform ease-in 200ms;
`;

export const Back = styled(Img)`
  background: #c33764;
  background: -webkit-linear-gradient(to right, #1d2671, #c33764);
  background: linear-gradient(to right, #1d2671, #c33764);
  transition: transform ease-in 200ms;
  transition-delay: 200ms;
`;

export const Flipper = styled.div`
  &.flipped {
    ${Front} {
      transform: rotateY(0deg);
      transition-delay: 200ms;
    }
    ${Back} {
      transform: rotateY(90deg);
      transition-delay: 0s;
    }
  }
`;
