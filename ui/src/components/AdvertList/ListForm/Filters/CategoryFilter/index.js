import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/common/Dropdown';
import categoriesServices from 'services/categoriesServices';
import { FilterController } from '../styled';

const CategoryFilter = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await categoriesServices.getCategories();
      const mapped = res.data.map((el) => ({
        id: el._id,
        value: el.name,
        children: el.children.map((e) => ({ id: e._id, value: e.name })),
      }));
      setCategories([{ id: 0, value: 'Будь-яка категорія' }, ...mapped]);
    })();
  }, []);

  return (
    <FilterController>
      <h5>Категорія</h5>
      <Dropdown onSelect={onSelect} options={categories} defaultIndex={0} />
    </FilterController>
  );
};

CategoryFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
