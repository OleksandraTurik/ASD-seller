import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.greyBackground};
  padding: 24px;

  @media screen and (max-width: 480px) {
    align-items: center;
    flex-direction: column;
    padding: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 15px;
    margin-left: 0;
    width: 85%;
  }
`;

export const SliderWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
