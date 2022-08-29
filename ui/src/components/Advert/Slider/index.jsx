import React from 'react';

// Images
import guitarImg from 'assets/img/guitarImg.webp';

// Styles
import { Wrapper, Image } from './styled';

const Slider = () => (
  <Wrapper>
    <Image src={guitarImg} alt="guitar" />
  </Wrapper>
);

export default Slider;
