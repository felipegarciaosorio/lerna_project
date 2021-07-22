import { p as promiseResolve, b as bootstrapLazy } from './index-23f5804f.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["int-button",[[1,"int-button"]]]], options);
  });
};

export { defineCustomElements };
