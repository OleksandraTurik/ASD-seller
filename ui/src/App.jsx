import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainRoutes from 'routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import GlobalStyle from './GlobalStyle';
import Footer from './components/common/Footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <GlobalStyle />
    <MainRoutes />
    <Footer />
  </BrowserRouter>
);

export default App;
