import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from 'routes/MainRoutes';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <MainRoutes />
  </BrowserRouter>
);

export default App;
