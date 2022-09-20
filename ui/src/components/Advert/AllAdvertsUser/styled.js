import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 91%;
  margin-bottom: 25px;

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
      margin: 20px 15px 0 0;
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
