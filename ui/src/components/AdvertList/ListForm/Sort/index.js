import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropdown from 'components/common/Dropdown';

const sortMethods = [
  {
    id: 'dscPrice',
    value: 'Найдорожчі',
  },
  {
    id: 'ascPrice',
    value: 'Найдешевші',
  },
  {
    id: 'dscDate',
    value: 'Найновіші',
  },
];

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: normal;
  }

  h5 {
    font-size: 18px;
    font-weight: normal;
  }
`;

const SortDropdown = styled(Dropdown)`
  width: 100%;
`;

const Sort = ({ value, onSelect }) => (
  <Wrapper>
    <h5>Сортувати за:</h5>
    <SortDropdown defaultID={value} onSelect={({ id }) => onSelect(id)} options={sortMethods} />
  </Wrapper>
);

Sort.propTypes = {
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Sort;
