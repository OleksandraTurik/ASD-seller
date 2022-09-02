import { createGlobalStyle } from 'styled-components';
import iconClose from './assets/icons/close-icon.svg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
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

[type="file"] {
  color: #878787;
}
[type="file"]::-webkit-file-upload-button {
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  background-color: rgb(0, 47, 52);
  border: 2px solid rgb(0, 47, 52);
  border-radius: 4px;
  color: rgb(255, 255, 255);
  padding: 5px 11px 5px;
  transition: all 0.1s ease;
}

[type="file"]::-webkit-file-upload-button:hover {
  color: rgb(0, 47, 52);
  background-color: white;
}
`;

export default GlobalStyle;
