import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainRoutes from 'routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);

export default App;
