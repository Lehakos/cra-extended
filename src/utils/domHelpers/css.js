// @flow
import type { StyleRules } from './domHelpers.types';

export const css = (element: HTMLElement, styles: StyleRules) => {
  const cssRules = Object.entries(styles);
  cssRules.forEach(([prop, value]) => {
    element.style[prop] = value;
  });
};
