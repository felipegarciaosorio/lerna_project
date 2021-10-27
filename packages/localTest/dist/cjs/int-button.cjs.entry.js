'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8f637654.js');

const intButtonCss = ":host{display:block}.top{background:#20355b;font-size:13px;color:#fff;position:fixed;top:0;width:100%;z-index:2;padding:0 16px;align-items:center;white-space:nowrap;left:0}.logo img{height:40px}";

const IntButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("div", { class: "top" }, index.h("div", { class: "applogo" }, index.h("a", { href: "#/home", class: "logo" }, index.h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
};
IntButton.style = intButtonCss;

exports.int_button = IntButton;
