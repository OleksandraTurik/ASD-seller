import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from 'routes/MainRoutes';

const App = () => (
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);

export default App;
