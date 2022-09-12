import React from 'react';
import { useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const activated = JSON.parse(localStorage.getItem('tokens'))?.userDto.isActivated;
  console.log(activated);
  return activated ? children : navigate('/');
};

export default PrivateRoute;
