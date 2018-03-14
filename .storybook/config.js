import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import React from 'react';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import '../src/globalStyles';
import configureStore from '../src/store';
import theme from '../src/theme';

const req = require.context('../src', true, /\.story\.jsx$/)

setAddon(infoAddon);

setOptions({
  showLeftPanel: true,
  showDownPanel: true,
  downPanelInRight: true,
  sortStoriesByKind: true,
});

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 50px;
  margin: -20px;

  background: #f3f3f3;
`;

addDecorator((story) => (
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Wrapper>
          {story()}
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
));

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
