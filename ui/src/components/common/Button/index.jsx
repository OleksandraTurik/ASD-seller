import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styled';

const Button = ({ children, onClick }) => <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
