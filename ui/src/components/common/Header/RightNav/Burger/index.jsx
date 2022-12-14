import BurgerIcons from 'assets/icons/Burger';
import React from 'react';
import PropTypes from 'prop-types';
import { BurgerButton } from './styled';

const Burger = ({ setActive }) => {
  const handleOpen = () => {
    setActive(prev => !prev);
  };

  return (
    <BurgerButton type="button" onClick={handleOpen}>
      <BurgerIcons width="40px" height="40px" />
    </BurgerButton>
  );
};

Burger.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default Burger;
