'use strict';

const index = require('./index-56c19071.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('intelepeer-web-component.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["font-icon_4.cjs",[[4,"font-icon",{"icon":[1],"config":[8]}],[1,"int-navbar",{"logoImage":[1,"logo-image"]}],[4,"int-sideitem"],[4,"int-sidenav"]]],["int-button.cjs",[[1,"int-button",{"logoImage":[1,"logo-image"]}]]]], options);
});
