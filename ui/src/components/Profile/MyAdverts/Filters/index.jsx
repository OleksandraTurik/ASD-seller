import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// Icons
import IconSearch from 'assets/icons/MagnifyingGlass';

// Styles
import {
  Wrapper,
  Form,
  SearchContainer,
  SearchInput,
  CategoryDropdown,
  SortDropdown,
} from './styled';
import useFetchCategories from '../../../hooks/useFetchCategories';

const sortOptions = [
  { id: 'dscDate', value: 'Найновіші', children: [] },
  { id: 'ascTitle', value: 'Заголовок: А-Я', children: [] },
  { id: 'dscTitle', value: 'Заголовок: Я-А', children: [] },
  { id: 'ascPrice', value: 'Ціна: Найнижча', children: [] },
  { id: 'dscPrice', value: 'Ціна: Найвища', children: [] },
];

const Filters = ({ onFilter, onSearch, itemsAmount }) => {
  const { data } = useFetchCategories();

  const categoryOptions = useMemo(() => [{ id: '', value: 'Будь-яка категорія', children: [] }, ...data?.map((el) => ({
    id: el._id,
    value: el.name,
    children: el.children.map((e) => ({ id: e._id, value: e.name })),
  })) || []], [data]);

  const searchHandler = (event) => {
    onSearch(event.target.value);
  };
  const categoryHandler = ({ id }) => {
    onFilter({ category: id });
  };
  const sortHandler = ({ id }) => {
    onFilter({ sort: id });
  };

  return (
    <Wrapper>
      <Form>
        <SearchContainer>
          <IconSearch
            width="20px"
            height="20px"
            fill="#002F34"
          />
          <SearchInput
            onChange={searchHandler}
            type="search"
            placeholder="Заголовок"
          />
        </SearchContainer>
        <CategoryDropdown
          options={categoryOptions}
          onSelect={categoryHandler}
        />
        <SortDropdown
          options={sortOptions}
          onSelect={sortHandler}
        />
      </Form>
      <span>
        Всього оголошень:
        {' '}
        {itemsAmount}
      </span>
    </Wrapper>
  );
};

Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  itemsAmount: PropTypes.number,
};

Filters.defaultProps = {
  itemsAmount: 0,
};

export default Filters;
