import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { SubTextStyle } from './styled';

const SubText = ({ children }) => (
  <SubTextStyle>{children}</SubTextStyle>
);

SubText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubText;
