import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import theme from 'helpers/theme';
import GlobalStyle from 'GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
);
