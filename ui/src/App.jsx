import React from 'react';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
