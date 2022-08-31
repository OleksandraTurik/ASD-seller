import { createGlobalStyle } from 'styled-components';
import iconClose from './assets/icons/close-icon.svg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1.9em;
    width: 1.9em;
    border-radius: 50em;
    background: url(${iconClose}) no-repeat 50% 50%;
    background-size: contain;
    pointer-events: none;
    cursor: pointer;
    position: relative;
    left: -10px;
  }

  input[type="search"]:focus::-webkit-search-cancel-button {
    pointer-events: all;
  }
`;

export default GlobalStyle;
