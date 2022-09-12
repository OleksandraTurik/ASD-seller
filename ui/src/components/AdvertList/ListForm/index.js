import React from 'react';
import Search from './Search';
import Filters from './Filters';
import Sort from './Sort';
import { Form } from './styled';

const ListForm = () => (
  <Form>
    <Search />
    <Filters />
    <Sort />
  </Form>
);

export default ListForm;
