import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled(Slider)`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  cursor: grabbing;
  padding: 0 20px;

  .slick-track {
    display: flex;
    align-items: center;
  }

  & ul {
    position: absolute;
    z-index: 999;
    bottom: 2px;

    @media screen and (max-width: 480px) {
      bottom: 0;
    }

    li.slick-active button:before {
      color: #003034;
    }
  }

  .slick-dots li button:before {
    @media screen and (max-width: 768px) {
      font-size: 5px;
    }
  }

  @media screen and (max-width: 320px) {
    padding: 0 10px;
  }
`;

export const ArrowNext = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 5px;
    border: 21px solid transparent;
    border-left: 15px solid #003034;

    @media screen and (max-width: 768px) {
      border: 18px solid transparent;
      border-left: 12px solid #003034;
    }

    @media screen and (max-width: 480px) {
      border: 16px solid transparent;
      border-left: 11px solid #003034;
    }

    @media screen and (max-width: 320px) {
      border: 12px solid transparent;
      border-left: 10px solid #003034;
    }
  }

  &:hover::after {
    border-left: 15px solid #d5f6ee;

    @media screen and (max-width: 768px) {
      border-left: 12px solid #003034;
    }

    @media screen and (max-width: 480px) {
      border-left: 11px solid #003034;
    }

    @media screen and (max-width: 320px) {
      border-left: 10px solid #003034;
    }
  }
`;

export const ArrowPrev = styled.div`
  cursor: pointer;
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

    @media screen and (max-width: 768px) {
      border: 18px solid transparent;
      border-left: 12px solid #003034;
    }

    @media screen and (max-width: 480px) {
      border: 16px solid transparent;
      border-left: 11px solid #003034;
    }

    @media screen and (max-width: 320px) {
      border: 12px solid transparent;
      border-left: 10px solid #003034;
    }
  }

  &:hover::after {
    border-left: 15px solid #d5f6ee;

    @media screen and (max-width: 768px) {
      border-left: 12px solid #003034;
    }

    @media screen and (max-width: 480px) {
      border-left: 11px solid #003034;
    }

    @media screen and (max-width: 320px) {
      border-left: 10px solid #003034;
    }
  }
`;

export const Image = styled.img`
  max-height: 580px;
  max-width: 99%;
  margin: auto;
`;
