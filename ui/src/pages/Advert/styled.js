import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.greyBackground};
  padding: 15px;
  flex: 1 1 auto;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    margin-top: 15px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 850px) {
    width: 91%;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    width: 98%;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const SliderWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;

  @media (max-width: 1280px) {
    width: 55%;
  }

  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const SearchWrap = styled.div`
  width: 100%;

  @media (max-width: 1280px) {
    width: 88%;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;
