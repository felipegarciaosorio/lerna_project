'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8f637654.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["int-button.cjs",[[1,"int-button",{"logoImage":[1,"logo-image"]}]]],["font-icon_6.cjs",[[1,"int-card",{"userName":[1025,"user-name"],"APIData":[32],"showAngularTab":[32],"showStencilTab":[32],"myStencilUsers":[32],"myAngularUsers":[32]},[[16,"searchWoldNameSelected","seasearchWoldNameSelectedHandler"]]],[4,"font-icon",{"icon":[1],"config":[8]}],[1,"int-navbar",{"logoImage":[1,"logo-image"]}],[4,"int-sidebar",null,[[0,"todoCompleted","todoCompletedHandler"]]],[4,"int-sideitem",{"name":[1]}],[1,"int-search",{"searchText":[1025,"search-text"],"searchResult":[32],"userInput":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
