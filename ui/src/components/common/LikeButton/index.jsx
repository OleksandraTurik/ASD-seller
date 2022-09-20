import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import userServices from 'services/userServices';
import { addToFavorites, removeFromFavorites } from 'redux/slice/getInfoExactUser';

import Like from 'assets/icons/Like';
import { Button } from './styled';

const LikeButton = ({ advertId, ...props }) => {
  const dispatch = useDispatch();
  const { favorites, _id: id } = useSelector(state => state.exactUserInfoSlice.data);
  const [active, setActive] = useState(favorites.includes(advertId));

  const clickHandler = async (event) => {
    event.stopPropagation();
    try {
      if (active) {
        await userServices.updateUserFavorites(id, 'REMOVE', advertId);
        dispatch(removeFromFavorites(advertId));
      } else {
        await userServices.updateUserFavorites(id, 'ADD', advertId);
        dispatch(addToFavorites(advertId));
      }
      setActive(prev => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button onClick={clickHandler}>
      <Like
        active={active}
        width="25px"
        height="25px"
        fill={active ? '#002f34' : '#afafaf'}
        {...props}
      />
    </Button>
  );
};

LikeButton.propTypes = {
  advertId: PropTypes.string.isRequired,
};

export default LikeButton;
