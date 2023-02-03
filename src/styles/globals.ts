import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0 auto;
  }
  html,
  body,h1, h2, h3, h4, h5, h6, p, span,button,a,ul, ol,img{
    padding: 0;
    margin: 0;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`
