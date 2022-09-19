import React from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import NotFound from '../pages/NotFound';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const activated = JSON.parse(localStorage.getItem('tokens'))?.userDto.isActivated;
  console.log(activated);
  return true ? children : <NotFound activeEmail />;
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;
