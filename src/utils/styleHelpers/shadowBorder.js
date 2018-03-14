// @flow
import { css } from 'styled-components';

import theme from '../../theme';

type Sides = {
  left?: boolean,
  right?: boolean,
  top?: boolean,
  bottom?: boolean,
};

const getShadow = (side: string, size: number, color: string) => {
  switch (side) {
    case 'top':
      return `inset 0 ${size}px ${color}`;
    case 'right':
      return `inset -${size}px 0 ${color}`;
    case 'bottom':
      return `inset 0 -${size}px 0 ${color}`;
    case 'left':
      return `inset ${size}px 0 ${color}`;
    default:
      return '';
  }
};

export const shadowBorder = (
  sides: Sides = {},
  size: number = 1,
  color: string = theme.colors.globalLines,
) => {
  const defaultSides: Sides = {
    top: true,
    right: true,
    bottom: true,
    left: true,
  };
  const computedSides: Sides = { ...defaultSides, ...sides };
  const shadows = Object.entries(computedSides)
    .filter(([side, value]) => value)
    .map(([side, value]) => getShadow(side, size, color));

  if (!shadows.length) return '';

  return css`
    box-shadow: ${shadows.join(', ')};
  `;
};
