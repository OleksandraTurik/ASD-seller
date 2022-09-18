import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropdown from 'components/common/Dropdown';
import { FilterController } from 'components/AdvertList/ListForm/Filters/styled';
import useFetchCategories from 'components/hooks/useFetchCategories';

const StyledDropdown = styled(Dropdown)`
  @media (max-width: 450px) {
    width: calc(100% - 20px) !important;
  }
`;

const CategoryFilter = ({ onSelect, value }) => {
  const { data } = useFetchCategories();
  const [isMobileMedia, setIsMobileMedia] = useState(window.matchMedia('(max-width: 450px)'));

  const categories = useMemo(() => [{ id: '', value: 'Будь-яка категорія', children: [] }, ...data?.map((el) => ({
    id: el._id,
    value: el.name,
    children: el.children.map((e) => ({ id: e._id, value: e.name })),
  })) || []], [data]);

  useEffect(() => {
    const changeHandler = () => {
      setIsMobileMedia(window.matchMedia('(max-width: 450px)'));
    };
    isMobileMedia.addEventListener('change', changeHandler);
    return () => isMobileMedia.removeEventListener('change', changeHandler);
  }, []);

  return (
    <FilterController>
      <h5>Категорія</h5>
      <StyledDropdown
        onSelect={({ id }) => onSelect(id)}
        options={categories}
        defaultID={value}
        isMobile={isMobileMedia.matches}
      />
    </FilterController>
  );
};

CategoryFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoryFilter;
