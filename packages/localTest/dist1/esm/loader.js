import { p as promiseResolve, b as bootstrapLazy } from './index-a55178ef.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["font-icon_4",[[4,"font-icon",{"icon":[1],"config":[8]}],[1,"int-navbar",{"logoImage":[1,"logo-image"]}],[4,"int-sideitem"],[4,"int-sidenav"]]],["int-button",[[1,"int-button",{"logoImage":[1,"logo-image"]}]]]], options);
  });
};

export { defineCustomElements };
