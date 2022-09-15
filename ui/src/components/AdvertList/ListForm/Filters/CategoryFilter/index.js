import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropdown from 'components/common/Dropdown';
import categoriesServices from 'services/categoriesServices';
import { FilterController } from 'components/AdvertList/ListForm/Filters/styled';

const StyledDropdown = styled(Dropdown)`
  @media (max-width: 450px) {
    width: calc(100% - 20px) !important;
  }
`;

const CategoryFilter = ({ onSelect, value }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await categoriesServices.getCategories();
        const mapped = res.data.map((el) => ({
          id: el._id,
          value: el.name,
          children: el.children.map((e) => ({ id: e._id, value: e.name })),
        }));
        setCategories([{ id: '', value: 'Будь-яка категорія', children: [] }, ...mapped]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <FilterController>
      <h5>Категорія</h5>
      <StyledDropdown
        onSelect={({ id }) => onSelect(id)}
        options={categories}
        defaultID={value}
      />
    </FilterController>
  );
};

CategoryFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoryFilter;
