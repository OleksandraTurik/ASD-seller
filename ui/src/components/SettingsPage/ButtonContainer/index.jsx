import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainerStyle } from './styled';

const ButtonContainer = ({ children }) => (
  <ButtonContainerStyle>{children}</ButtonContainerStyle>
);

ButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonContainer;
