import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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
  const onSearch = onChange;
  return (
    <Wrapper>
      <Filters
        onSearch={onSearch}
        onSelected={({ value }) => changeFilters('sort', value)}
        categorySelected={(value) => changeFilters('category', value)}
      />
      <AdvertsList
        filters={filters}
        setFilters={setFilters}
        list={list}
        error={error}
        fetchData={fetchData}
        changeFilters={changeFilters}
        itemsAmount={itemsAmount}
      />
    </Wrapper>
  );
};

export default MyAdverts;
