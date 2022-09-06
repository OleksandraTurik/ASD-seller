import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// Icons
import mapMarker from 'assets/icons/mapMarker.svg';
import calendar from 'assets/icons/calendar.svg';

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
  Icon,
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
  id,
}) => {
  const userId = JSON.parse(localStorage.getItem('tokens'));
  console.log(userId.userDto.id);
  return (
    <Wrapper>
      <Container>
        <TopWrap>
          <ImgInCard src={img} alt="bmw car" />
          <AdvertInfoWrap>
            <AdvertHeaderWrap>
              <AdvertTitleLink to={link}>{name}</AdvertTitleLink>
              <span>{price}</span>
            </AdvertHeaderWrap>
            <AdvertBodyWrap>
              <ListWrap>
                <ul>
                  <li>{category}</li>
                  <li>{subcategory}</li>
                </ul>
              </ListWrap>
              <LocationWrap>
                <Icon src={mapMarker} alt="map icon" />
                <p>{location}</p>
              </LocationWrap>
              <DataWrap>
                <Icon src={calendar} alt="calendar icon" />
                <span>{date}</span>
              </DataWrap>
            </AdvertBodyWrap>
          </AdvertInfoWrap>
        </TopWrap>
        <BottomWrap>
          <span>{id}</span>
          <EditLink to="/adverts">Редагувати</EditLink>
        </BottomWrap>
      </Container>
    </Wrapper>
  );
};

AdvertCardList.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  subcategory: PropTypes.string,
  id: PropTypes.string,
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
  id: '',
};

export default AdvertCardList;
