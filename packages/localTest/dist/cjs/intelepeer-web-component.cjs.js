'use strict';

const index = require('./index-8f637654.js');

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
  return index.bootstrapLazy([["int-button.cjs",[[1,"int-button",{"logoImage":[1,"logo-image"]}]]],["font-icon_6.cjs",[[1,"int-card",{"userName":[1025,"user-name"],"APIData":[32],"showAngularTab":[32],"showStencilTab":[32],"myStencilUsers":[32],"myAngularUsers":[32]},[[16,"searchWoldNameSelected","seasearchWoldNameSelectedHandler"]]],[4,"font-icon",{"icon":[1],"config":[8]}],[1,"int-navbar",{"logoImage":[1,"logo-image"]}],[4,"int-sidebar",null,[[0,"todoCompleted","todoCompletedHandler"]]],[4,"int-sideitem",{"name":[1]}],[1,"int-search",{"searchText":[1025,"search-text"],"searchResult":[32],"userInput":[32]}]]]], options);
});
