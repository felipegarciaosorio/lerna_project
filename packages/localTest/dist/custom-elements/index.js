import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const intButtonCss = ":host{display:block}";

const IntButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("button", null, h("slot", null))));
  }
  static get style() { return intButtonCss; }
};

const IntButton = /*@__PURE__*/proxyCustomElement(IntButton$1, [1,"int-button"]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      IntButton
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { IntButton, defineCustomElements };
