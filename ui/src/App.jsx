import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainRoutes from 'routes/MainRoutes';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux';

const Container = styled.div`
  position: relative;
  min-height: 100%;
`;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Header />
        <MainRoutes />
        <Footer />
      </Container>
    </BrowserRouter>
  </Provider>

);

export default App;
