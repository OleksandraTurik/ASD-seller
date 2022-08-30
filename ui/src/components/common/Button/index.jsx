import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styled';

const Button = ({ children }) => <ButtonStyle>{children}</ButtonStyle>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
