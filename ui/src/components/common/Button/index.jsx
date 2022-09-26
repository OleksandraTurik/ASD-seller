import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styled';

const Button = ({ children, onClick, type }) => <ButtonStyle type={type} onClick={onClick}>{children}</ButtonStyle>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button', 'submit',

  ]),
};

Button.defaultProps = {
  onClick: undefined,
  type: 'button',
};

export default Button;
