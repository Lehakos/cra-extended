import React from 'react';

/* eslint-disable max-len */
export const Plus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path id="__plus__a" d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2h-7z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="__plus__b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="currentColor" xlinkHref="#__plus__a" />
      <g mask="url(#__plus__b)">
        <path fill="#21303F" d="M0 0h24v24H0z" />
        <path fill="#FFF" d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);
