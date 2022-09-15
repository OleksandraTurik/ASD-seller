import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { SubContainerStyle } from './styled';

const SubContainer = ({ children }) => (
  <SubContainerStyle>{children}</SubContainerStyle>
);

SubContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubContainer;
