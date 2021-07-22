'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-05188843.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["int-button.cjs",[[1,"int-button"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
