import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 25px;
  width: 100vw;

  @media screen and (max-width: 2160px) {
    width: 80vw;
  }

  @media screen and (max-width: 1600px) {
    width: 87vw;
  }

  @media screen and (max-width: 1400px) {
    width: 93vw;
  }

  @media screen and (max-width: 1280px) {
    width: 88vw;
  }

  @media screen and (max-width: 1024px) {
    width: 96vw;
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
  }

  @media screen and (max-width: 850px) {
    width: 85vw;
  }

  @media screen and (max-width: 480px) {
    width: 89vw;
  }

  & h1 {
    font-size: 26px;
    margin: 20px 0;

    @media screen and (max-width: 1280px) {
      font-size: 24px;
    }

    @media screen and (max-width: 768px) {
      font-size: 21px;
    }

    @media screen and (max-width: 480px) {
      font-size: 18px;
    }

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }
`;

export const SliderWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
