import React from 'react';
import PropTypes from 'prop-types';
import AdvertCard from './AdvertCard';

const AdvertsList = ({
  list = [], itemsAmount, error, loading, handleDelete,
}) => (
  <AdvertCard
    list={list}
    itemsAmount={itemsAmount}
    error={error}
    loading={loading}
    handleDelete={handleDelete}
  />
);
AdvertsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  itemsAmount: PropTypes.number,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  handleDelete: PropTypes.func,
};

AdvertsList.defaultProps = {
  itemsAmount: 0,
  list: [],
  error: false,
  loading: true,
  handleDelete: () => {},
};

export default AdvertsList;
