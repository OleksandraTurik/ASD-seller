import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Routes
import MainRoutes from 'routes/MainRoutes';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

// Store
import { store } from './redux';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  </Provider>

);

export default App;
