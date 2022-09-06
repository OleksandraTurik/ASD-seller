import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainRoutes from 'routes/MainRoutes';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  </Provider>

);

export default App;
