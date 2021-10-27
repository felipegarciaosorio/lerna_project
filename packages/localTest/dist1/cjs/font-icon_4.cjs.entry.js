'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-56c19071.js');

const fontawesomeIconCss = "icons-fontawesome i{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}";

const FontawesomeIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    // This component will get access
    // to config if slotted inside root.
    console.log(this.config);
  }
  render() {
    return [
      index.h("slot", { name: "items" }, index.h("i", { class: this.icon }))
    ];
  }
  static get assetsDirs() { return ["assets"]; }
};
FontawesomeIcon.style = fontawesomeIconCss;

const intNavbarCss = ":host{display:block}.top{background:#20355b;font-size:13px;color:#fff;position:fixed;top:0;width:100%;z-index:2;padding:0 16px;align-items:center;white-space:nowrap;left:0}.logo img{height:40px}";

const IntNavbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("div", { class: "top" }, index.h("div", { class: "applogo" }, index.h("a", { href: "#/home", class: "logo" }, index.h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
};
IntNavbar.style = intNavbarCss;

const intSideItemCss = ".side-item{color:#ababab;cursor:pointer;display:block;height:48px;padding-top:8px;margin-left:-10%}";

const IntSideItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("li", { class: "side-item" }, index.h("slot", null))
    ];
  }
};
IntSideItem.style = intSideItemCss;

const intSidenavCss = ".sidebar{width:30px;position:absolute;top:0;left:0;background:#fff;height:100%;padding-top:2%}.sidebar-panel{width:100%;height:100%;border-right:solid 1px rgba(0, 0, 0, .12)}";

const IntSidenav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("div", { class: "sidebar" }, index.h("ul", { class: "sidebar-panel" }, index.h("side-item", null, index.h("slot", null)))),
    ];
  }
};
IntSidenav.style = intSidenavCss;

exports.font_icon = FontawesomeIcon;
exports.int_navbar = IntNavbar;
exports.int_sideitem = IntSideItem;
exports.int_sidenav = IntSidenav;
