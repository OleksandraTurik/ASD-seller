import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.greyBackground};
  padding: 35px 125px 0 125px;

  @media screen and (max-width: 1280px) {
    padding: 30px 80px 0 80px;
  }

  @media screen and (max-width: 768px) {
    padding: 25px 60px 0 60px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 50px 0 50px;
  }

  @media screen and (max-width: 320px) {
    padding: 15px 40px 0 40px;
  }
`;
