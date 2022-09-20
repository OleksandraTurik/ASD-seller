import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled(Slider)`
  position: relative;
  border-radius: 5px;
  cursor: grabbing;
  width: 1050px;

  @media screen and (max-width: 1280px) {
    width: 850px;
  }

  @media screen and (max-width: 900px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 540px;
  }

  @media screen and (max-width: 600px) {
    width: 480px;
  }

  @media screen and (max-width: 550px) {
    width: 420px;
  }
  
  @media screen and (max-width: 480px) {
    width: 360px;
  }

  @media screen and (max-width: 400px) {
    width: 310px;
  }

  @media screen and (max-width: 340px) {
    width: 260px;
  }

  .slick-track {
    display: flex;
    align-items: center;
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

  .slick-slide slick-active slick-current {
    height: 340px;
  }

  @media screen and (max-width: 320px) {
    padding: 10px;
  }
`;
