import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled(Slider)`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  padding: 29px;
  margin: 24px 24px 24px 0;

  & ul {
    position: unset;
  }
`;

export const Image = styled.img`
  height: 580px;
  padding-left: 140px;
`;
