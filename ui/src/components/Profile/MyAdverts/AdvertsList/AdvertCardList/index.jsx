import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { URL } from 'API';
import { removeFromFavorites } from 'redux/slice/getInfoExactUser';

// Icons
import IconLocation from 'assets/icons/Location';
import IconCalendar from 'assets/icons/Calendar';
import advertServices from '../../../../../services/advertServices';

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
  ImageWrap,
  DeleteButton,
} from './styled';

const AdvertCardList = ({
  id,
  link,
  img,
  name,
  location,
  date,
  price,
  category,
  subcategory,
  handleDelete,
}) => {
  const dispatch = useDispatch();

  const deleteItem = async () => {
    try {
      await advertServices.deleteAdvert(id);
      dispatch(removeFromFavorites(id));
      handleDelete(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Container>
        <TopWrap>
          <ImageWrap>
            <ImgInCard src={`${URL}/${img}`} alt="image" />
          </ImageWrap>
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
          <EditLink to={`/add/${id}`}>Редагувати</EditLink>
          <DeleteButton onClick={deleteItem}>Видалити</DeleteButton>
        </BottomWrap>
      </Container>
    </Wrapper>
  );
};

AdvertCardList.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  subcategory: PropTypes.string,
  handleDelete: PropTypes.func,
};

AdvertCardList.defaultProps = {
  id: '',
  link: '',
  img: '',
  name: '',
  location: '',
  date: '',
  price: '',
  category: '',
  subcategory: '',
  handleDelete: () => {},
};

export default AdvertCardList;
