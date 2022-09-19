import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.greyBackground};
  padding: 25px 50px 0;

  @media screen and (max-width: 1280px) {
    padding: 20px 40px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 30px 0;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 25px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 15px 15px 0;
  }
`;
