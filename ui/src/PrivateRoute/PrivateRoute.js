import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../pages/NotFound';

const PrivateRoute = ({ children }) => {
  const activated = JSON.parse(localStorage.getItem('tokens'))?.userDto.isActivated;
  return activated ? children : <NotFound activeEmail />;
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;
