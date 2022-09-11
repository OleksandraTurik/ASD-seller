import React from 'react';
import Search from './Search';
import Filters from './Filters';
import { Form } from './styled';

const ListForm = () => (
  <Form>
    <Search />
    <Filters />
  </Form>
);

export default ListForm;
