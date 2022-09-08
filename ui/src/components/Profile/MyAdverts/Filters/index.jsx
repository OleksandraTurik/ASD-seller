import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdvertsInfo } from 'redux/slice/getAdvertInfo';
import Select from 'react-select';

// Icons
import IconSearch from 'assets/icons/MagnifyingGlass';
import IconArrowDown from 'assets/icons/ArrowDown';

// Styles
import {
  Wrapper,
  MainContainer,
  IconWrap,
  Container,
  SearchInput,
  DropDownBtn,
  Button,
  IconContainer,
  Test,
} from './styled';
import Loader from '../../../common/Loader';

const options = [
  { value: 'заголовок: а-я', label: 'Заголовок: А-Я' },
  { value: 'заголовок: я-а', label: 'Заголовок: Я-А' },
  { value: 'ціна: найнижча', label: 'Ціна: Найнижча' },
  { value: 'ціна: найвища', label: 'Ціна: Найвища' },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuColor ? '' : '#002F34',
    padding: 5,
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

const Filters = () => {
  const { data, loading, error } = useSelector((state) => state.userAdvertInfoReducer);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('tokens'));

  useEffect(() => {
    dispatch(getAdvertsInfo(user.userDto.id));
  }, []);

  if (loading) {
    return <Loader />;
  }
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
            type="text"
            placeholder="Заголовок"
          />
        </Container>
        <Container>
          <Button type="button">
            Будь-яка категорія
          </Button>
          <DropDownBtn>
            <IconWrap>
              <IconArrowDown />
            </IconWrap>
          </DropDownBtn>
        </Container>
        <Container>
          <Test>
            <Select
              styles={customStyles}
              options={options}
              placeholder="Сортувати"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#e6fcff',
                  primary: '#002F34',
                },
              })}
            />
          </Test>
        </Container>
      </MainContainer>
      <span>
        Всього оголошень:
        {' '}
        {
          data?.itemsAmount
            ? data.itemsAmount
            : 0
        }
      </span>
    </Wrapper>
  );
};

export default Filters;
