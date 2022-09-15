import React from 'react';
import PropTypes from 'prop-types';

// Components
import AdvertCard from 'components/Profile/MyAdverts/AdvertsList/AdvertCard';

const AdvertsList = ({ setAmount }) => (
  <div>
    <AdvertCard setAmount={setAmount} />
  </div>
);

AdvertsList.propTypes = {
  setAmount: PropTypes.func.isRequired,
};

export default AdvertsList;
