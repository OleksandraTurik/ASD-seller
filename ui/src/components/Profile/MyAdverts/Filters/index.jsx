import React from 'react';

// Icons
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg';
import { ReactComponent as IconSearch } from 'assets/icons/search-icon.svg';
import { ReactComponent as IconArrowDown } from 'assets/icons/angleDown.svg';

// Styles
import {
  Wrapper,
  MainContainer,
  AddFilterBtn,
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
          <IconSearch />
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
