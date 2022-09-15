import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

// Icons
import IconSearch from 'assets/icons/MagnifyingGlass';

// Styles
import {
  Wrapper,
  MainContainer,
  Container,
  SearchInput,
  IconContainer,
  WrapSelect,
} from './styled';

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuColor ? '' : '#002F34',
    padding: 5,
    fontSize: '13px',
  }),

  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0,
    },
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const Filters = ({ onSelected, onSearch }) => {
  const options = [
    { value: 'ascTitle', label: 'Заголовок: А-Я' },
    { value: 'dscTitle', label: 'Заголовок: Я-А' },
    { value: 'ascPrice', label: 'Ціна: Найнижча' },
    { value: 'dscPrice', label: 'Ціна: Найвища' },
  ];

  return (
    <Wrapper>
      <MainContainer>
        <Container>
          <IconContainer>
            <IconSearch
              width="20px"
              height="20px"
              fill="#002F34"
            />
          </IconContainer>
          <SearchInput
            onChange={onSearch}
            type="text"
            placeholder="Заголовок"
          />
        </Container>
        <Container>
          <WrapSelect>
            <Select
              styles={customStyles}
              options={options}
              onChange={onSelected}
              placeholder="Сортувати"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#cbf7ee',
                  primary: '#002F34',
                },
              })}
            />
          </WrapSelect>
        </Container>
      </MainContainer>
      <span>
        Всього оголошень:
        {' '}
      </span>
    </Wrapper>
  );
};

Filters.propTypes = {
  onSelected: PropTypes.func,
  onSearch: PropTypes.func,
};

Filters.defaultProps = {
  onSelected: () => {},
  onSearch: () => {},
};
export default Filters;
