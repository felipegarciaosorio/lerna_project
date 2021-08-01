import { h, attachShadow, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const fontawesomeIconCss = "icons-fontawesome i{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}";

const FontawesomeIcon = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  componentWillLoad() {
    // This component will get access
    // to config if slotted inside root.
    console.log(this.config);
  }
  render() {
    return [
      h("slot", { name: "items" }, h("i", { class: this.icon }))
    ];
  }
  static get assetsDirs() { return ["assets"]; }
  static get style() { return fontawesomeIconCss; }
};

const intButtonCss = ":host{display:block}.top{background:#20355b;font-size:13px;color:#fff;position:fixed;top:0;width:100%;z-index:2;padding:0 16px;align-items:center;white-space:nowrap;left:0}.logo img{height:40px}";

const IntButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return [
      h("div", { class: "top" }, h("div", { class: "applogo" }, h("a", { href: "#/home", class: "logo" }, h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
  static get style() { return intButtonCss; }
};

const intNavbarCss = ":host{display:block}.top{background:#20355b;font-size:13px;color:#fff;position:fixed;top:0;width:100%;z-index:2;padding:0 16px;align-items:center;white-space:nowrap;left:0}.logo img{height:40px}";

const IntNavbar$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return [
      h("div", { class: "top" }, h("div", { class: "applogo" }, h("a", { href: "#/home", class: "logo" }, h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
  static get style() { return intNavbarCss; }
};

const intSideItemCss = ".side-item{color:#ababab;cursor:pointer;display:block;height:48px;padding-top:8px;margin-left:-10%}";

const IntSideItem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return [
      h("li", { class: "side-item" }, h("slot", null))
    ];
  }
  static get style() { return intSideItemCss; }
};

const intSidenavCss = ".sidebar{width:30px;position:absolute;top:0;left:0;background:#fff;height:100%;padding-top:2%}.sidebar-panel{width:100%;height:100%;border-right:solid 1px rgba(0, 0, 0, .12)}";

const IntSidenav$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return [
      h("div", { class: "sidebar" }, h("ul", { class: "sidebar-panel" }, h("side-item", null, h("slot", null)))),
    ];
  }
  static get style() { return intSidenavCss; }
};

const FontIcon = /*@__PURE__*/proxyCustomElement(FontawesomeIcon, [4,"font-icon",{"icon":[1],"config":[8]}]);
const IntButton = /*@__PURE__*/proxyCustomElement(IntButton$1, [1,"int-button",{"logoImage":[1,"logo-image"]}]);
const IntNavbar = /*@__PURE__*/proxyCustomElement(IntNavbar$1, [1,"int-navbar",{"logoImage":[1,"logo-image"]}]);
const IntSideitem = /*@__PURE__*/proxyCustomElement(IntSideItem, [4,"int-sideitem"]);
const IntSidenav = /*@__PURE__*/proxyCustomElement(IntSidenav$1, [4,"int-sidenav"]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      FontIcon,
  IntButton,
  IntNavbar,
  IntSideitem,
  IntSidenav
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { FontIcon, IntButton, IntNavbar, IntSideitem, IntSidenav, defineCustomElements };
