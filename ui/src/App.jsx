import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/common/Footer';
import MainRoutes from './routes/MainRoutes';
import './styles.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
