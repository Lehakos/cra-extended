// @flow
import * as React from 'react';
import type { EnzymeSelector, ShallowWrapper, ReactWrapper } from 'enzyme';

import { shallowWithTheme, mountWithTheme } from './renderFunctions';

type ChildrenMap = {
  [name: string]: EnzymeSelector,
};

type Props = {
  [prop: string]: any,
};

type Result = {
  props: Props,
  wrapper: ShallowWrapper | ReactWrapper,
};

export const configureSetup = <p: Props>(
  Component: React.ComponentType<*>,
  defaultProps: p,
  childrenMap: ChildrenMap = {},
) => (
  propOverrides: p,
  shallow: boolean = true,
) => {
  const props: p = Object.assign({}, defaultProps, propOverrides);
  const element = <Component {...props} />;
  const wrapper = shallow ? shallowWithTheme(element) : mountWithTheme(element);
  const result: Result = { props, wrapper };

  Object.keys(childrenMap).forEach((key) => {
    result[key] = wrapper.find(childrenMap[key]);
  });

  return result;
};
