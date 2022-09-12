import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './styled';

const Pagination = ({ onNextPageClick, onPrevPageClick }) => (
  <Wrapper>
    <Button onClick={() => onPrevPageClick?.()}>Попередня сторінка</Button>
    <Button onClick={() => onNextPageClick?.()}>Наступна сторінка</Button>
  </Wrapper>
);

Pagination.propTypes = {
  onPrevPageClick: PropTypes.oneOfType([PropTypes.func, null]).isRequired,
  onNextPageClick: PropTypes.oneOfType([PropTypes.func, null]).isRequired,
};

export default Pagination;
