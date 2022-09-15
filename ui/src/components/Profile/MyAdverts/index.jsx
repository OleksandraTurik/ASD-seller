import React, { useState } from 'react';

// Components
import AdvertsList from 'components/Profile/MyAdverts/AdvertsList';
import Filters from 'components/Profile/MyAdverts/Filters';

// Styles
import { Wrapper } from './styled';

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
