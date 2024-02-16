import { createGlobalStyle } from "styled-components";
//import "modern-normalize/modern-normalize.css";
import "./index.css";

export const GlobalStyle = createGlobalStyle`

@font-face{
  
  font-family: "Manrope-Medium";
  src: url("./assets/fonts/Manrope-Medium.ttf") format('truetype');
  
}

:root{
  // COLORS
  // * Primary colors: 

  --primary-blue:#3470ff;
  --primary-black: #121417;
  --active-blue: #0b44cd;

  // * Secondary colors: 

  //Fonts
  --font-family:"Manrope-Medium", sans-serif;
}

body {
  margin: 0;
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`