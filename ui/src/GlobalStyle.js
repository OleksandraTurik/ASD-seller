import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }
  
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
    main {
      flex: 1 1 auto;
    }
  }
`;

export default GlobalStyle;
