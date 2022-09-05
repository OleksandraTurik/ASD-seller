import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

const theme = {
  mainGreenColor: '#002f34',
  greyBackground: '#f2f4f5',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
);
