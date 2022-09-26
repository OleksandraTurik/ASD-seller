import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90vh;
  padding: 16px;

  & span {
    font-size: 16px;

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      font-size: 13px;
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export const Title = styled.h1`
  padding: 16px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  & svg {
    @media screen and (max-width: 1280px) {
      width: 160px;
      height: 160px;
    }

    @media screen and (max-width: 768px) {
      width: 130px;
      height: 130px;
    }

    @media screen and (max-width: 480px) {
      width: 115px;
      height: 115px;
    }
  }
`;
