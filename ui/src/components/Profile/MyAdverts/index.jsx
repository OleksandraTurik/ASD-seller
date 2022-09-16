import React from 'react';
import { useParams } from 'react-router-dom';

// Hooks
import { useFetchAdverts } from 'components/hooks/useFetchAdverts';

// Components
import AdvertsList from './AdvertsList';
import Filters from './Filters';

// Styles
import { Wrapper } from './styled';

const MyAdverts = () => {
  const { id } = useParams();
  const {
    list,
    loading,
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
        loading={loading}
      />
    </Wrapper>
  );
};

export default MyAdverts;
