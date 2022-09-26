import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

// Hooks
import useFetchAdverts from '../../../hooks/useFetchAdverts';

// Components
import AdvertsList from './AdvertsList';

import Filters from './Filters';
// Styles
import { Wrapper } from './styled';
import searchFilter from '../../../helpers/search-filter';

const MyAdverts = () => {
  const { _id: id } = useSelector(state => state.exactUserInfoSlice.data);
  const [list, setList] = useState([]);
  const [queryParams, setQueryParams] = useState({ seller: id, sort: 'dscDate', limit: '1000' });
  const {
    data, pending, error,
  } = useFetchAdverts(queryParams);
  const [searchValue, setSearchValue] = useState('');

  const filterHandler = (updates = {}) => {
    setQueryParams(prev => ({ ...prev, ...updates }));
  };
  const searchHandler = (str) => {
    setSearchValue(str);
  };
  const adverts = useMemo(() => searchFilter(searchValue, list), [list, searchValue]);
  useEffect(() => {
    setList(data?.results);
  }, [data]);
  const handleDelete = (id) => {
    setList((prevState) => prevState.filter(i => i._id !== id));
  };
  return (
    <Wrapper>
      <Filters
        onFilter={filterHandler}
        onSearch={searchHandler}
        itemsAmount={adverts.length}
      />
      <AdvertsList
        itemsAmount={adverts.length}
        list={adverts}
        error={!!error}
        loading={pending}
        handleDelete={handleDelete}
      />
    </Wrapper>
  );
};

export default MyAdverts;
