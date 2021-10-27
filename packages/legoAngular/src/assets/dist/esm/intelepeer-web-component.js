import { p as promiseResolve, b as bootstrapLazy } from './index-68fa2037.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["int-button",[[1,"int-button",{"logoImage":[1,"logo-image"]}]]],["font-icon_6",[[1,"int-card",{"userName":[1025,"user-name"],"APIData":[32],"showAngularTab":[32],"showStencilTab":[32],"myStencilUsers":[32],"myAngularUsers":[32]},[[16,"searchWoldNameSelected","seasearchWoldNameSelectedHandler"]]],[4,"font-icon",{"icon":[1],"config":[8]}],[1,"int-navbar",{"logoImage":[1,"logo-image"]}],[4,"int-sidebar",null,[[0,"todoCompleted","todoCompletedHandler"]]],[4,"int-sideitem",{"name":[1]}],[1,"int-search",{"searchText":[1025,"search-text"],"searchResult":[32],"userInput":[32]}]]]], options);
});
