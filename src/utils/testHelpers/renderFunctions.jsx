// @flow
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';

const getContext = () => shallow(<ThemeProvider theme={theme} />)
  .instance()
  .getChildContext();

export const shallowWithTheme = (tree: React.Element<*>) => {
  const context = getContext();

  return shallow(tree, { context });
};

export const mountWithTheme = (tree: React.Element<*>) => {
  const context = getContext();
  const { childContextTypes } = ThemeProvider;

  return mount(tree, { context, childContextTypes });
};
