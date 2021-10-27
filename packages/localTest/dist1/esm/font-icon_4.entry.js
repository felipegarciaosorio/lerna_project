import { r as registerInstance, h } from './index-a55178ef.js';

const fontawesomeIconCss = "icons-fontawesome i{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}";

const FontawesomeIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
FontawesomeIcon.style = fontawesomeIconCss;

const intNavbarCss = ":host{display:block}.top{background:#20355b;font-size:13px;color:#fff;position:fixed;top:0;width:100%;z-index:2;padding:0 16px;align-items:center;white-space:nowrap;left:0}.logo img{height:40px}";

const IntNavbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("div", { class: "top" }, h("div", { class: "applogo" }, h("a", { href: "#/home", class: "logo" }, h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
};
IntNavbar.style = intNavbarCss;

const intSideItemCss = ".side-item{color:#ababab;cursor:pointer;display:block;height:48px;padding-top:8px;margin-left:-10%}";

const IntSideItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("li", { class: "side-item" }, h("slot", null))
    ];
  }
};
IntSideItem.style = intSideItemCss;

const intSidenavCss = ".sidebar{width:30px;position:absolute;top:0;left:0;background:#fff;height:100%;padding-top:2%}.sidebar-panel{width:100%;height:100%;border-right:solid 1px rgba(0, 0, 0, .12)}";

const IntSidenav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("div", { class: "sidebar" }, h("ul", { class: "sidebar-panel" }, h("side-item", null, h("slot", null)))),
    ];
  }
};
IntSidenav.style = intSidenavCss;

export { FontawesomeIcon as font_icon, IntNavbar as int_navbar, IntSideItem as int_sideitem, IntSidenav as int_sidenav };
