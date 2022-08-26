import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styled';

function Button({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
