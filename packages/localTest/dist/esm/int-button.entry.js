import { r as registerInstance, h, H as Host } from './index-23f5804f.js';

const intButtonCss = ":host{display:block}";

const IntButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("button", null, h("slot", null))));
  }
};
IntButton.style = intButtonCss;

export { IntButton as int_button };
