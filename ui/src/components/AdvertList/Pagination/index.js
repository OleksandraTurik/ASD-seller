import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Next, Previous } from './styled';

const Pagination = ({ onNextPageClick, onPrevPageClick }) => (
  <Wrapper hasPrev={!!onPrevPageClick} hasNext={!!onNextPageClick}>
    {!!onPrevPageClick && <Previous onClick={() => onPrevPageClick?.()}>Попередня сторінка</Previous>}
    {!!onNextPageClick && <Next onClick={() => onNextPageClick?.()}>Наступна сторінка</Next>}
  </Wrapper>
);

Pagination.propTypes = {
  // eslint-disable-next-line react/require-default-props
  onPrevPageClick: PropTypes.oneOfType([PropTypes.func]),
  // eslint-disable-next-line react/require-default-props
  onNextPageClick: PropTypes.oneOfType([PropTypes.func]),
};

export default Pagination;
