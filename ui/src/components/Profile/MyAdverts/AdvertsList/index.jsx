import React from 'react';
import PropTypes from 'prop-types';
import AdvertCard from './AdvertCard';

const AdvertsList = ({ setAmount }) => (
  <div>
    <AdvertCard setAmount={setAmount} />
  </div>
);

AdvertsList.propTypes = {
  setAmount: PropTypes.func.isRequired,
};

export default AdvertsList;
