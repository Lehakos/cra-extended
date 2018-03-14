import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import history from 'shared/history';

import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import configureStore from './store';
import './globalStyles';
import './globalConfig';

import { App } from './modules/app';

const store = configureStore();

// Create-react-app find index.js file like entry point
/* eslint-disable react/jsx-filename-extension */
const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
};
/* eslint-enable */

renderApp();

if (module.hot) {
  module.hot.accept('./modules/app', renderApp);
}

registerServiceWorker();
