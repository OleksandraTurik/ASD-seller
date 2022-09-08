import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${props => props.theme.mainGreenColor};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  /* position: relative; */
  left: 45%;
  margin: 250px 0;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <StyledSpinner />
);

export default Loader;
