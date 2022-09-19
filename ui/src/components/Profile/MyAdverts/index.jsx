import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

// Hooks
import useFetchAdvertsQueryParams from '../../hooks/useFetchAdvertsQueryParams';

// Components
import AdvertsList from './AdvertsList';

import Filters from './Filters';
// Styles
import { Wrapper } from './styled';
import searchFilter from '../../../helpers/search-filter';

const MyAdverts = () => {
  const { id } = useParams();
  const [queryParams, setQueryParams] = useState({ seller: id, sort: 'dscDate', limit: '1000' });
  const { data, pending, error } = useFetchAdvertsQueryParams(queryParams);
  const [searchValue, setSearchValue] = useState('');

  const filterHandler = (updates = {}) => {
    setQueryParams(prev => ({ ...prev, ...updates }));
  };
  const searchHandler = (str) => {
    setSearchValue(str);
  };
  const adverts = useMemo(() => searchFilter(searchValue, data?.results), [data, searchValue]);

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
        error={error}
        loading={pending}
      />
    </Wrapper>
  );
};

export default MyAdverts;
