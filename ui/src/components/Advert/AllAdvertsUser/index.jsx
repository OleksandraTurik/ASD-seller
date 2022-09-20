import React from 'react';

// Styles
import AdvertSlider from './AdvertSlider';
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
