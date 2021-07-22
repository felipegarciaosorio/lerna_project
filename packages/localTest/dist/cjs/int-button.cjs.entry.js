'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-05188843.js');

const intButtonCss = ":host{display:block}";

const IntButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("button", null, index.h("slot", null))));
  }
};
IntButton.style = intButtonCss;

exports.int_button = IntButton;
