import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 32px;
    font-weight: 700;
    color: rgb(0, 47, 52);
    margin: 48px 0 0 125px;

    @media screen and (max-width: 1280px) {
      font-size: 26px;
      margin: 38px 0 0 100px;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
      margin: 28px 0 0 85px;
    }

    @media screen and (max-width: 600px) {
      font-size: 21px;
      margin: 26px 0 0 65px;
    }

    @media screen and (max-width: 480px) {
      margin: 18px 0 0 45px;
    }

    @media screen and (max-width: 320px) {
      font-size: 18px;
      margin: 18px 0 0 40px;
    }
  }
`;
