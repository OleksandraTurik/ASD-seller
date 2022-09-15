import React from 'react';
import PropTypes from 'prop-types';

// Icons
import IconLocation from 'assets/icons/Location';
import IconCalendar from 'assets/icons/Calendar';

// Styles
import {
  Wrapper,
  Container,
  TopWrap,
  ImgInCard,
  AdvertInfoWrap,
  AdvertHeaderWrap,
  AdvertTitleLink,
  AdvertBodyWrap,
  ListWrap,
  LocationWrap,
  DataWrap,
  BottomWrap,
  EditLink,
} from './styled';

const AdvertCardList = ({
  link,
  img,
  name,
  location,
  date,
  price,
  category,
  subcategory,
}) => (
  <Wrapper>
    <Container>
      <TopWrap>
        <ImgInCard src={`http://localhost:4000/${img}`} alt="bmw car" />
        <AdvertInfoWrap>
          <AdvertHeaderWrap>
            <AdvertTitleLink to={link}>{name}</AdvertTitleLink>
            <span>{price}</span>
          </AdvertHeaderWrap>
          <AdvertBodyWrap>
            <ListWrap>
              <ul>
                <li>{category}</li>
              </ul>
            </ListWrap>
            <LocationWrap>
              <IconLocation
                width="20px"
                height="20px"
                fill="#002F34"
              />
              <p>{location}</p>
            </LocationWrap>
            <DataWrap>
              <IconCalendar
                width="20px"
                height="20px"
                fill="#002F34"
              />
              <span>{date}</span>
            </DataWrap>
          </AdvertBodyWrap>
        </AdvertInfoWrap>
      </TopWrap>
      <BottomWrap>
        <EditLink to="/adverts">Редагувати</EditLink>
      </BottomWrap>
    </Container>
  </Wrapper>
);

AdvertCardList.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  subcategory: PropTypes.string,
};

AdvertCardList.defaultProps = {
  link: '',
  img: '',
  name: '',
  location: '',
  date: '',
  price: '',
  category: '',
  subcategory: '',
};

export default AdvertCardList;
