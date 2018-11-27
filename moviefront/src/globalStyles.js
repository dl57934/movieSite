import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');
  ${reset};
  body{
    font-family: 'Maven Pro', sans-serif;
    background-color: black;
  };
  a{
      color:inherit;
  };
  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  };
`;

export default GlobalStyle;
