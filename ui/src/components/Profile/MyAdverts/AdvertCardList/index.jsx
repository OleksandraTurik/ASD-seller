import React from 'react';

// Icons
// import favButtonIcon from 'assets/icons/toFavoriteButton.svg';

// Images
import bmw from 'assets/img/bmw.webp';

// Styles
import {
  Wrapper,
  Container,
  ImgInCard,
  EditBtn,
} from './styled';

const AdvertCardList = () => (
  <Wrapper>
    <Container>
      <div>
        <ImgInCard src={bmw} />
      </div>
      <div>
        <span>ID 761665035</span>
        <EditBtn>Редагувати</EditBtn>
      </div>
    </Container>
  </Wrapper>
);

export default AdvertCardList;
