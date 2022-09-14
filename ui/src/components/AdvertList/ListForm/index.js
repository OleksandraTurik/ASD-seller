import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import Search from './Search';
import Filters from './Filters';
import Sort from './Sort';
import { Form } from './styled';

const ListForm = ({ onSubmit }) => {
  const [pageQueries] = useSearchParams();
  const [search, setSearch] = useState(pageQueries.get('search') || '');
  const [{ maxPrice, minPrice, category }, setFilters] = useState({
    maxPrice: pageQueries.get('maxPrice') || '',
    minPrice: pageQueries.get('minPrice') || '',
    category: pageQueries.get('category') || '',
  });
  const [sort, setSort] = useState(pageQueries.get('search') || '');

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit({
      search,
      maxPrice,
      minPrice,
      category,
      sort,
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

  return (
    <Form onSubmit={submitHandler}>
      <Search value={search || ''} onSearch={searchHandler} />
      <Filters maxPriceValue={maxPrice} minPriceValue={minPrice} categoryValue={category} onFilter={filterHandler} />
      <Sort value={sort} onSelect={(value) => setSort(value)} />
    </Form>
  );
};

ListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ListForm;
