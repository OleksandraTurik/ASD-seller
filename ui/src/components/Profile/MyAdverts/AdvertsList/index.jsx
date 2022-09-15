import React from 'react';
import PropTypes from 'prop-types';
import AdvertCard from './AdvertCard';

const AdvertsList = ({
  list = [], changeFilters, itemsAmount, error,
}) => (
  <div>
    <AdvertCard list={list} itemsAmount={itemsAmount} changeFilters={changeFilters} error={error} />
  </div>
);
AdvertsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  itemsAmount: PropTypes.number,
  changeFilters: PropTypes.func,
  error: PropTypes.bool,
};

AdvertsList.defaultProps = {
  itemsAmount: 0,
  list: [],
  changeFilters: () => {},
  error: false,
};

export default AdvertsList;
