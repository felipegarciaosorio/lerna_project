import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'intelepeer-web-component',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'intelepeer-web-component',
      directivesProxyFile: '../stencil-ds-angular-template/src/directives/proxies.ts',
      //valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
