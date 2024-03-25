import { createGlobalStyle } from 'styled-components';

import AnteliveWoff from '../../Assets/fonts/Antelive.woff';
import AnteliveWoff2 from '../../Assets/fonts/Antelive.woff2';
import OnestBoldWoff from '../../Assets/fonts/Onest-Bold.woff';
import OnestBoldWoff2 from '../../Assets/fonts/Onest-Bold.woff2';
import OnestRegularWoff from '../../Assets/fonts/Onest-Regular.woff';
import OnestRegularWoff2 from '../../Assets/fonts/Onest-Regular.woff2';
import OnestMediumWoff from '../../Assets/fonts/Onest-Medium.woff';
import OnestMediumWoff2 from '../../Assets/fonts/Onest-Medium.woff2';
import colors from '../../Shared/Constants/colors';
import { fonts } from '../../Shared/Constants/typography';

const AppStyles = createGlobalStyle`

@font-face {
    font-family: 'Antelive';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${AnteliveWoff2}) format("woff2"),
        url(${AnteliveWoff}) format("woff");
}

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${OnestBoldWoff2}) format("woff2"),
        url(${OnestBoldWoff}) format("woff");
}

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${OnestMediumWoff2}) format("woff2"),
        url(${OnestMediumWoff}) format("woff");
}

@font-face {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${OnestRegularWoff2}) format("woff2"),
        url(${OnestRegularWoff}) format("woff");
} 

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    padding: 0;
    margin: 0;
}

h1 {
  color: ${colors.darkGrey};
  font-family: ${fonts.fontFamilyAntelive};
  font-size: 56px;
  font-weight: 700;
  line-height: normal;
    @media (max-width: 1000px) {
        font-size: 40px;

    }
    @media (max-width: 800px) {
        font-size: 28px;
    }
}

h2 {
    color: ${colors.darkGrey};
    font-family: ${fonts.fontFamilyAntelive};
    font-size: 56px;
    font-weight: 700;
    line-height: normal;
}


h3 {
  color: ${colors.darkGrey};
  font-family: ${fonts.fontFamilyAntelive};
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
    @media (max-width: 1280px) {
        font-size: 32px;
    }
    @media (max-width: 800px) {
        font-size: 28px;
    }
}


h4 {
  color: ${colors.black};
  font-family: ${fonts.fontFamilyAntelive};
  font-size: 32px;
  font-weight: 700;
  line-height: 130%;
    @media (max-width: 1000px) {
        font-size: 28px;
    }
    @media (max-width: 800px) {
        font-size: 24px;
    }
}


h5 {
  color: ${colors.black};
  font-family: ${fonts.fontFamilyAntelive};
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
}


h6 {
  color: ${colors.black};
  font-family: ${fonts.fontFamilyAntelive};
  font-size: 20px;
  font-weight: 700;
  line-height: 110%;
}


p {
    font-family: ${fonts.fontFamilyOnest};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media (max-width: 1280px) {
        font-size: 20px;
    }
    @media (max-width: 1000px) {
        font-size: 18px;
    }
    @media (max-width: 800px) {
        font-size: 16px;
    }
}

span {
    font-family: ${fonts.fontFamilyOnest};
    color: ${colors.red};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}


ul,
    ol {
    list-style: none;
}

html {
    scroll-behavior: smooth;

&:focus-within {
        scroll-behavior: smooth;
    }
}

body {
    min-height: 100%;
    text-rendering: optimizespeed;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}

a {
    color: inherit;
    text-decoration: inherit;
}

@media screen and (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
}
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }
*,
*::before,
*::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
    }
}

button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
}
`;

export default AppStyles;
