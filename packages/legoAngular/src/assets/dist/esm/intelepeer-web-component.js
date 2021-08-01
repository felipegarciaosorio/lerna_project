import { p as promiseResolve, b as bootstrapLazy } from './index-a55178ef.js';

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
  return bootstrapLazy([["font-icon_4",[[4,"font-icon",{"icon":[1],"config":[8]}],[1,"int-navbar",{"logoImage":[1,"logo-image"]}],[4,"int-sideitem"],[4,"int-sidenav"]]],["int-button",[[1,"int-button",{"logoImage":[1,"logo-image"]}]]]], options);
});
