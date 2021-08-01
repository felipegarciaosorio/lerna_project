import { Component, h } from '@stencil/core';
export class IntSidenav {
  render() {
    return [
      h("div", { class: "sidebar" },
        h("ul", { class: "sidebar-panel" },
          h("side-item", null,
            h("slot", null)))),
    ];
  }
  static get is() { return "int-sidenav"; }
  static get originalStyleUrls() { return {
    "$": ["int-sidenav.css"]
  }; }
  static get styleUrls() { return {
    "$": ["int-sidenav.css"]
  }; }
}
