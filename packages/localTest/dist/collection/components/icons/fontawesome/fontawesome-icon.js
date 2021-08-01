import { Component, Prop, h } from '@stencil/core';
export class FontawesomeIcon {
  componentWillLoad() {
    // This component will get access
    // to config if slotted inside root.
    console.log(this.config);
  }
  render() {
    return [
      h("slot", { name: "items" },
        h("i", { class: this.icon }))
    ];
  }
  static get is() { return "font-icon"; }
  static get originalStyleUrls() { return {
    "$": ["fontawesome-icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["fontawesome-icon.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "icon": {
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
      "attribute": "icon",
      "reflect": false
    },
    "config": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "config",
      "reflect": false
    }
  }; }
}
