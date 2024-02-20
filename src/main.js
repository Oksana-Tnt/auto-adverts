import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import Regular from "../src/assets/fonts/Manrope-Regular.ttf";
import Medium from "../src/assets/fonts/Manrope-Medium.ttf";
import Bold from "../src/assets/fonts/Manrope-Bold.ttf";
import BgImgMob from "../src/assets/images/Background-mob.jpg";
import BgImgTabl from "../src/assets/images/Background-tabl.jpg";
import BgImgFull from "../src/assets/images/Background-fullscreen.jpg";

export const GlobalStyle = createGlobalStyle`

@font-face{
  
  @font-face {
    font-family: 'Manrope-Regular',sans-serif;
    src: url(${Regular}) format('truetype'),
    }

  @font-face {
    font-family: 'Manrope-Medium',sans-serif;
    src: url(${Medium}) format('truetype'),
    }

  @font-face {
    font-family: 'Manrope-Bold',sans-serif;
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
  --secondary-black: #8a8a89;
  // * Secondary colors: 

}

body {
  
   font-family: 'Manrope-Regular', sans-serif;
  color:var(--primary-black);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    
}


.catalog-section{
  padding-top: 150px;
  height: 100vh;
  overflow-y: scroll;

  }

.favorite-section{
  padding-top: 80px;
    height: 100vh;
    overflow-y: scroll;
  @media screen and (min-width: 768px){
    padding-top: 100px;
  }
    @media screen and (min-width: 1440px){
    padding-top: 150px;
  }
}
.container{
  min-width: 390px;

  @media screen and (min-width:768px){
    min-width: 768px;
  }

   @media screen and (min-width:1440px){
    min-width: 1440px;
  }
}

.catalog-container{
  height: calc (-50px + 100vh);
  overflow-y: scroll;
}

.homePage{ 
  background-image: url("${BgImgMob}");
  object-fit: cover;
  background-repeat: no-repeat; 


  @media screen and (min-width: 768px){
  background-image: url("${BgImgTabl}");
  }

   @media screen and (min-width: 1440px){
  background-image: url("${BgImgFull}");
  }

}
`;
