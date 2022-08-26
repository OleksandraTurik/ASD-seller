import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
