import { Component, h, Prop } from '@stencil/core';
export class IntNavbar {
  render() {
    return [
      h("div", { class: "top" },
        h("div", { class: "applogo" },
          h("a", { href: "#/home", class: "logo" },
            h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
  static get is() { return "int-navbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["int-navbar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["int-navbar.css"]
  }; }
  static get properties() { return {
    "logoImage": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "logo-image",
      "reflect": false
    }
  }; }
}
