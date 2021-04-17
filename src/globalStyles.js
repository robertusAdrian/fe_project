import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body,
    ul, ol, li,
    h1, h2, h3, h4, h5, h6, p, div {
    margin: 0;
    padding: 0;
    font-family: "Asap",sans-serif;
    }

    body{
        /* overflow-x:hidden; */
        min-height:100vh;
        background-color: #f9f9f9;
    }
`;

export default GlobalStyle;
