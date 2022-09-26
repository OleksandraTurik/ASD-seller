import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from 'helpers/theme';
import GlobalStyle from 'GlobalStyle';
import { store } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);
