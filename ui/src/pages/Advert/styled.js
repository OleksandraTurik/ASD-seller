import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: ${props => props.theme.greyBackground};
  padding: 15px;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 32%;

  @media screen and (max-width: 768px) {
    width: 96%;
  }

  @media screen and (max-width: 600px) {
    margin-top: 15px;
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
