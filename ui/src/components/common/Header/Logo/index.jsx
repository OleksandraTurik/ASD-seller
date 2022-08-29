import React from 'react';
import PropTypes from 'prop-types';
import { LogoStyle } from './style';

const Logo = ({ children }) => (
  <LogoStyle>
    {children}
  </LogoStyle>
);

Logo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Logo;
