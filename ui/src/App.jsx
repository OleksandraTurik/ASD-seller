import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const id = JSON.parse(localStorage.getItem('tokens'))?.userDto?.id;

const App = () => {
  const user = useSelector(state => state.exactUserInfoSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getExactUserInfoThunk(id));
  }, [id]);

  console.log('user', user);

  return (
    <BrowserRouter>
      <Header />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
