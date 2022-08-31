import React from 'react';
import MainRoutes from 'routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <BrowserRouter>
    <Header />
    <GlobalStyle />
    <MainRoutes />
  </BrowserRouter>
);

export default App;
