import React from 'react';
import PropTypes from 'prop-types';
import AdvertCard from './AdvertCard';

const AdvertsList = ({
  list = [], itemsAmount, error, loading,
}) => (
  <AdvertCard
    list={list}
    itemsAmount={itemsAmount}
    error={error}
    loading={loading}
  />
);
AdvertsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  itemsAmount: PropTypes.number,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

AdvertsList.defaultProps = {
  itemsAmount: 0,
  list: [],
  error: false,
  loading: true,
};

export default AdvertsList;
