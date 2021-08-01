'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-56c19071.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["font-icon_4.cjs",[[4,"font-icon",{"icon":[1],"config":[8]}],[1,"int-navbar",{"logoImage":[1,"logo-image"]}],[4,"int-sideitem"],[4,"int-sidenav"]]],["int-button.cjs",[[1,"int-button",{"logoImage":[1,"logo-image"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
