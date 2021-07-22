import { Component, Host, h } from '@stencil/core';
export class IntButton {
  render() {
    return (h(Host, null,
      h("button", null,
        h("slot", null))));
  }
  static get is() { return "int-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["int-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["int-button.css"]
  }; }
}
