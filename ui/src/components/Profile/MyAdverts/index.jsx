import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import AdvertsList from './AdvertsList';
import Filters from './Filters';

// Styles
const Wrapper = styled.div`
  background-color: ${props => props.theme.greyBackground};
  padding: 35px 125px 0 125px;
`;

const MyAdverts = () => {
  const [amount, setAmount] = useState(0);

  return (
    <Wrapper>
      <Filters itemsAmount={amount} />
      <AdvertsList setAmount={setAmount} />
    </Wrapper>
  );
};

export default MyAdverts;
