import { Component, h } from '@stencil/core';
export class IntSideItem {
  render() {
    return [
      h("li", { class: "side-item" },
        h("slot", null))
    ];
  }
  static get is() { return "int-sideitem"; }
  static get originalStyleUrls() { return {
    "$": ["int-side-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["int-side-item.css"]
  }; }
}
