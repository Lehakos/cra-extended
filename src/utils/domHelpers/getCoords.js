// @flow
import type { Coords } from './domHelpers.types';

export const getCoords = (elem: HTMLElement): Coords => {
  const box = elem.getBoundingClientRect();
  const { documentElement } = document;

  const scrollTop = window.pageYOffset;
  const scrollLeft = window.pageXOffset;

  const { clientTop, clientLeft } = documentElement;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;
  const right = left + elem.offsetWidth;
  const bottom = top + elem.offsetHeight;
  const xCenter = left + elem.offsetWidth / 2;
  const yCenter = top + elem.offsetHeight / 2;

  return {
    top,
    left,
    right,
    bottom,
    xCenter,
    yCenter,
  };
};
