import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { MainContainerStyle } from './styled';

const MainContainer = ({ children }) => (
  <MainContainerStyle>
    {children}
  </MainContainerStyle>
);

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
