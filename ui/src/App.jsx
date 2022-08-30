import React from 'react';
import MainRoutes from 'routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

const App = () => (
  <BrowserRouter>
    <Header />
    <GlobalStyle />
    <MainRoutes />
  </BrowserRouter>
);

export default App;
