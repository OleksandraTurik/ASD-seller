import React from 'react';
import styled from 'styled-components';

// Components
import AdvertsList from './AdvertsList';
import Filters from './Filters';

// Styles
const Wrapper = styled.div`
  background-color: #f2f4f5;
  height: 100vh;
  padding: 35px 125px 0 125px;
`;

const MyAdverts = () => (
  <Wrapper>
    <Filters />
    <AdvertsList />
  </Wrapper>
);

export default MyAdverts;
