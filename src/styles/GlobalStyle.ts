import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    box-sizing: border-box;
    font-display: fallback;
    font-size: 14px;
  }
`
