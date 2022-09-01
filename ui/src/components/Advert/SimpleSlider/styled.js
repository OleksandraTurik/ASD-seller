import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled(Slider)`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  padding: 29px;
  margin: 24px 24px 24px 0;

  & ul {
    position: unset;

    li.slick-active button:before {
      color: #003034;
    }
  }
`;

export const SampleNextArrow1 = styled.div`
  width: 20px;
  height: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 5px;
    border: 21px solid transparent;
    border-left: 15px solid #003034;
  }
`;

export const SamplePrevArrow1 = styled.div`
  width: 20px;
  height: 20px;

  &::after {
    content: '';
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 5px;
    transform: rotate(180deg);
    border: 21px solid transparent;
    border-left: 15px solid #003034;
  }
`;

export const Image = styled.img`
  height: 580px;
  padding-left: 140px;
`;
