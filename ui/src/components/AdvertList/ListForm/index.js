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

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit({ search });
  };

  const searchHandler = (str) => {
    setSearch(str);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Search value={search || ''} onSearch={searchHandler} />
      <Filters />
      <Sort />
    </Form>
  );
};

ListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ListForm;
