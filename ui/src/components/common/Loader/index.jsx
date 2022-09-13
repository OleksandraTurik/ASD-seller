/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  border: ${({ border }) => border || '16px solid #f3f3f3'};
  border-top: ${({ borderTopSize }) => borderTopSize || '16px'} solid ${props => props.theme.mainGreenColor};
  border-radius: 50%;
  width: ${({ width }) => width || '120px'};
  height: ${({ height }) => height || '120px'};
  animation: spin 2s linear infinite;
  position: relative;
  left: 45%;
  margin: ${({ margin }) => margin || '250px 0'};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({
  width,
  height,
  margin,
  border,
  borderTopSize,
}) => (
  <StyledSpinner
    width={width}
    height={height}
    margin={margin}
    border={border}
    borderTopSize={borderTopSize}
  />
);

export default Loader;
