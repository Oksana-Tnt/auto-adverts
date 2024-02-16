import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import Regular from "../src/assets/fonts/Manrope-Regular.ttf";
import Medium from "../src/assets/fonts/Manrope-Medium.ttf";
import Bold from "../src/assets/fonts/Manrope-Bold.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face{
  
  @font-face {
    font-family: 'Manrope',sans-serif;
    src: url(${Regular}) format('truetype'),
    }

  @font-face {
    font-family: 'Manrope',sans-serif;
    src: url(${Medium}) format('truetype'),
    }

  @font-face {
    font-family: 'Manrope',sans-serif;
    src: url(${Bold}) format('truetype'),
    }
}

:root{
  // COLORS
  // * Primary colors: 

  --primary-blue: #3470ff;
  --primary-black: #121417;
  --secondary-black: #363535;
  --active-blue: #0b44cd;

  // * Secondary colors: 

}

body {
  margin: 0;
   font-family: 'Manrope', sans-serif;
  color:var(--primary-black);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;
