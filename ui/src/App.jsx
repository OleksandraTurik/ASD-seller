import React from 'react';
import MainRoutes from 'routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/common/Header';
import GlobalStyle from './GlobalStyle';
import Footer from './components/common/Footer';
import { store } from './redux';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
