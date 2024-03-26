import { createGlobalStyle } from 'styled-components';

import MontserratSemiBoldWoff from '../../Assets/fonts/Montserrat-SemiBold.woff';
import MontserratSemiBoldWoff2 from '../../Assets/fonts/Montserrat-SemiBold.woff2';
import MontserratBoldWoff from '../../Assets/fonts/Montserrat-SemiBold.woff';
import MontserratBoldWoff2 from '../../Assets/fonts/Montserrat-SemiBold.woff2';
import MontserratRegularWoff from '../../Assets/fonts/Montserrat-SemiBold.woff';
import MontserratRegularWoff2 from '../../Assets/fonts/Montserrat-SemiBold.woff2';
import MontserratMediumWoff from '../../Assets/fonts/Montserrat-SemiBold.woff';
import MontserratMediumWoff2 from '../../Assets/fonts/Montserrat-SemiBold.woff2';

const AppStyles = createGlobalStyle`

@font-face {
    font-family: 'MontserratSemiBold';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${MontserratSemiBoldWoff2}) format("woff2"),
        url(${MontserratSemiBoldWoff}) format("woff");
}

@font-face {
    font-family: 'MontserratBold';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${MontserratBoldWoff2}) format("woff2"),
        url(${MontserratBoldWoff}) format("woff");
}

@font-face {
    font-family: 'MontserratRegular';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${MontserratRegularWoff2}) format("woff2"),
        url(${MontserratRegularWoff}) format("woff");
}

@font-face {
    font-family: 'MontserratMedium';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${MontserratMediumWoff2}) format("woff2"),
        url(${MontserratMediumWoff}) format("woff");
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

main {
    flex-grow: 1;
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
