import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { animateScroll } from 'react-scroll';

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
import { useLocation } from 'react-router-dom';

const id = JSON.parse(localStorage.getItem('tokens'))?.userDto?.id;

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({ duration: 100 });
    if (id) dispatch(getExactUserInfoThunk(id));
  }, [pathname]);

  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
