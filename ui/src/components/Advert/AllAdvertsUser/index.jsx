import React from 'react';

import AdvertSlider from './AdvertSlider';

// Styles
import { Wrapper, SliderWrap } from './styled';

const AllAdvertsUser = () => (
  <Wrapper>
    <h1>Усі оголошення автора</h1>
    <SliderWrap>
      <AdvertSlider />
    </SliderWrap>
  </Wrapper>
);

export default AllAdvertsUser;
