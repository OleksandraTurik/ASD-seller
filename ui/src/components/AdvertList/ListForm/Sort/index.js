import React from 'react';
import styled from 'styled-components';
import Dropdown from 'components/common/Dropdown';

const sortMethods = [
  {
    id: 0,
    value: 'Найдорожчі',
  },
  {
    id: 1,
    value: 'Найдешевші',
  },
  {
    id: 2,
    value: 'Найновіші',
  },
];

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  
  h5 {
    font-size: 18px;
    font-weight: normal;
  }
`;

const Sort = () => (
  <Wrapper>
    <h5>Сортувати за:</h5>
    <Dropdown defaultIndex={2} onSelect={() => {}} options={sortMethods} />
  </Wrapper>
);

export default Sort;
