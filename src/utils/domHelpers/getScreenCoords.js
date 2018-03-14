// @flow
import type { Coords } from './domHelpers.types';

export const getScreenCoords = (): Coords => {
  const { documentElement } = document;
  const top = window.pageYOffset;
  const left = window.pageXOffset;
  const screenHeight = documentElement.clientHeight;
  const screenWidth = documentElement.clientWidth;

  return {
    top,
    bottom: top + screenHeight,
    yCenter: top + screenHeight / 2,
    left,
    right: top + screenWidth,
    xCenter: left + screenWidth / 2,
  };
};
