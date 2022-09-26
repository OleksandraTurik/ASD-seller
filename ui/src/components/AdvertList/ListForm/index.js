import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import Search from 'components/AdvertList/ListForm/Search';
import Filters from 'components/AdvertList/ListForm/Filters';
import Sort from 'components/AdvertList/ListForm/Sort';
import { Form } from './styled';

const ListForm = ({ onSubmit }) => {
  const [pageQueries] = useSearchParams();
  const [search, setSearch] = useState(pageQueries.get('search') || '');
  const [{
    maxPrice, minPrice, category, city,
  }, setFilters] = useState({
    maxPrice: pageQueries.get('maxPrice') || '',
    minPrice: pageQueries.get('minPrice') || '',
    category: pageQueries.get('category') || '',
    city: pageQueries.get('city') || '',
  });
  const [sort, setSort] = useState(pageQueries.get('sort') || 'dscDate');

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit({
      search,
      maxPrice,
      minPrice,
      category,
      sort,
      city,
    });
  };

  const searchHandler = (str) => {
    setSearch(str);
  };
  const filterHandler = ({ maxPrice, minPrice, category }) => {
    const newValues = {};
    if (maxPrice !== undefined) newValues.maxPrice = maxPrice;
    if (minPrice !== undefined) newValues.minPrice = minPrice;
    if (category !== undefined) newValues.category = category;
    setFilters(prev => ({ ...prev, ...newValues }));
  };
  const citySelectHandler = (city) => {
    setFilters(prev => ({ ...prev, city: city || '' }));
  };

  return (
    <Form onSubmit={submitHandler}>
      <Search searchValue={search || ''} selectValue={city} onSearch={searchHandler} onCitySelect={citySelectHandler} />
      <Filters maxPriceValue={maxPrice} minPriceValue={minPrice} categoryValue={category} onFilter={filterHandler} />
      <Sort value={sort} onSelect={(value) => setSort(value)} />
    </Form>
  );
};

ListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ListForm;
