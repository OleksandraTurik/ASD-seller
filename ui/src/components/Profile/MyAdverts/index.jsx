import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { debounce } from '../../../helpers/debounce';

// Components
import AdvertsList from './AdvertsList';
import Filters from './Filters';
import { useFetchAdverts } from '../../hooks/useFetchAdverts';

// Styles
const Wrapper = styled.div`
  background-color: ${props => props.theme.greyBackground};
  padding: 35px 125px 0 125px;
`;

const MyAdverts = () => {
  const { id } = useParams();
  const {
    list,
    error,
    fetchData,
    changeFilters,
    setFilters,
    itemsAmount,
    filters,
  } = useFetchAdverts(id);
  const onChange = ({ target: { value } }) => changeFilters('search', value);
  const onSearch = debounce(onChange, 500);
  return (
    <Wrapper>
      <Filters onSearch={onSearch} onSelected={({ value }) => changeFilters('sort', value)} />
      <AdvertsList filters={filters} setFilters={setFilters} list={list} error={error} fetchData={fetchData} changeFilters={changeFilters} itemsAmount={itemsAmount} />
    </Wrapper>
  );
};

export default MyAdverts;
