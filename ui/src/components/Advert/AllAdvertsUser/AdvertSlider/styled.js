import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled(Slider)`
  position: relative;
  border-radius: 5px;
  cursor: grabbing;
  width: 90vw;

  .slick-track {
    display: flex;
    align-items: flex-end;
  }

  & ul {
    position: absolute;
    z-index: 999;
    bottom: 0;

    li.slick-active button:before {
      color: #003034;
    }
  }

  .slick-list {
    height: 420px;

    @media screen and (max-width: 1280px) {
      height: 400px;
    }

    @media screen and (max-width: 768px) {
      height: 415px;
    }

    @media screen and (max-width: 600px) {
      height: 400px;
    }

    @media screen and (max-width: 480px) {
      height: 430px;
    }

    @media screen and (max-width: 320px) {
      height: 460px;
    }
  }

  .slick-dots li button:before {
    @media screen and (max-width: 768px) {
      font-size: 5px;
    }
  }

  .slick-prev:before, .slick-next:before {
    color: #003034;
    font-size: 24px;

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }

  .slick-prev {
    position: fixed;
    left: 35px;
    top: 45%;
    z-index: 999;

    @media screen and (max-width: 480px) {
      top: 50%;
    }

    @media screen and (max-width: 320px) {
      z-index: -1;
    }
  }

  .slick-next {
    position: fixed;
    right: 35px;
    top: 45%;
    z-index: 999;

    @media screen and (max-width: 480px) {
      top: 50%;
    }

    @media screen and (max-width: 320px) {
      z-index: -1;
    }
  }

  .slick-slide slick-active slick-current {
    height: 340px;
  }
`;
