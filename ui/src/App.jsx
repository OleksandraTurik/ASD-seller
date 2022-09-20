import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Routes
import MainRoutes from 'routes/MainRoutes';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

// Slices
import { getExactUserInfoThunk } from 'redux/slice/getInfoExactUser';

const { id } = JSON.parse(localStorage.getItem('tokens')).userDto;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExactUserInfoThunk(id));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
