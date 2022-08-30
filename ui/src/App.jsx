import React from 'react';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import MainRoutes from './routes/MainRoutes';

const App = () => (
  <BrowserRouter>
    <Header />
    <MainRoutes />
  </BrowserRouter>
);

export default App;
