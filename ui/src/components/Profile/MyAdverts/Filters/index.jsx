import React from 'react';

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
} from './styled';

const Filters = () => (
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
          placeholder="Заголовком або ID"
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
        <Button type="button">
          Сортувати
        </Button>
        <DropDownBtn>
          <IconWrap>
            <IconArrowDown />
          </IconWrap>
        </DropDownBtn>
      </Container>
    </MainContainer>
    <span>Всього оголошень: 0</span>
  </Wrapper>
);

export default Filters;
