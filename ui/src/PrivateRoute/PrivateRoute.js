import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const activated = useSelector(state => state.userReducer?.user.id);
  return activated ? children : navigate('/');
};

export default PrivateRoute;
