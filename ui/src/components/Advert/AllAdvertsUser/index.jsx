import React from 'react';
import PropTypes from 'prop-types';

import AdvertSlider from './AdvertSlider';

// Styles
import { Wrapper, SliderWrap } from './styled';

const AllAdvertsUser = ({
  dataAdvertsList,
  pendingAdvertsList,
  errorAdvertsList,
}) => (
  <Wrapper>
    <h1>Усі оголошення автора</h1>
    <SliderWrap>
      <AdvertSlider
        dataAdvertsList={dataAdvertsList}
        lodaing={pendingAdvertsList}
        error={errorAdvertsList}
      />
    </SliderWrap>
  </Wrapper>
);

AllAdvertsUser.propTypes = {
  dataAdvertsList: PropTypes.arrayOf(PropTypes.shape({})),
  pendingAdvertsList: PropTypes.bool,
  errorAdvertsList: PropTypes.bool,
};

AllAdvertsUser.defaultProps = {
  dataAdvertsList: [],
  pendingAdvertsList: false,
  errorAdvertsList: false,
};

export default AllAdvertsUser;
