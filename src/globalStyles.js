import { injectGlobal } from 'styled-components';
import 'normalize.css';

// Global style
// eslint-disable-next-line no-unused-expressions
injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }
`;
