import React from 'react';
import PropTypes from 'prop-types';
import AdvertCard from './AdvertCard';

const AdvertsList = ({
  list = [], changeFilters, itemsAmount,
}) => (
  <div>
    <AdvertCard list={list} itemsAmount={itemsAmount} changeFilters={changeFilters} />
  </div>
);
AdvertsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  itemsAmount: PropTypes.number,
  changeFilters: PropTypes.func,
};

AdvertsList.defaultProps = {
  itemsAmount: 0,
  list: [],
  changeFilters: () => {},
};

export default AdvertsList;
