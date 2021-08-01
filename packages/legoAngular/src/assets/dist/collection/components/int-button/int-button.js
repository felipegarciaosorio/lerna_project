import { Component, h, Prop } from '@stencil/core';
export class IntButton {
  render() {
    return [
      h("div", { class: "top" },
        h("div", { class: "applogo" },
          h("a", { href: "#/home", class: "logo" },
            h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
  static get is() { return "int-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["int-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["int-button.css"]
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
