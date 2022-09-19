import React from 'react';
import PropTypes from 'prop-types';
import AdvertCard from './AdvertCard';

const AdvertsList = ({
  list = [], changeFilters, itemsAmount, error, loading,
}) => (
  <div>
    <AdvertCard
      list={list}
      itemsAmount={itemsAmount}
      changeFilters={changeFilters}
      error={error}
      loading={loading}
    />
  </div>
);
AdvertsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  itemsAmount: PropTypes.number,
  changeFilters: PropTypes.func,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

AdvertsList.defaultProps = {
  itemsAmount: 0,
  list: [],
  changeFilters: () => {},
  error: false,
  loading: true,
};

export default AdvertsList;
