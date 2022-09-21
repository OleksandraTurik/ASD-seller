import React from 'react';
import PropTypes from 'prop-types';

import AdvertSlider from './AdvertSlider';

// Styles
import { Wrapper, SliderWrap } from './styled';

const AllAdvertsUser = ({
  dataAdvertsList,
}) => (
  <Wrapper>
    <h1>Усі оголошення автора</h1>
    <SliderWrap>
      <AdvertSlider
        dataAdvertsList={dataAdvertsList}
      />
    </SliderWrap>
  </Wrapper>
);

AllAdvertsUser.propTypes = {
  dataAdvertsList: PropTypes.arrayOf(PropTypes.shape({})),
};

AllAdvertsUser.defaultProps = {
  dataAdvertsList: [],
};

export default AllAdvertsUser;
