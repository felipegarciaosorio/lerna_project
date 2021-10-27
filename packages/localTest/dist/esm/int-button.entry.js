import { r as registerInstance, h } from './index-68fa2037.js';

const intButtonCss = ":host{display:block}.top{background:#20355b;font-size:13px;color:#fff;position:fixed;top:0;width:100%;z-index:2;padding:0 16px;align-items:center;white-space:nowrap;left:0}.logo img{height:40px}";

const IntButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("div", { class: "top" }, h("div", { class: "applogo" }, h("a", { href: "#/home", class: "logo" }, h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
};
IntButton.style = intButtonCss;

export { IntButton as int_button };
