import { Component, h, Event, Prop } from '@stencil/core';
export class IntSideItem {
  todoCompletedHandler(todo) {
    console.log('+++++++++++++');
    console.dir(todo);
    this.todoCompleted.emit(todo);
  }
  onSelect() {
    this.selectData.emit(this.name);
    alert('OK');
  }
  render() {
    return [
      h("li", { class: "side-item", value: this.name, onClick: (ev) => this.todoCompletedHandler(ev) },
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
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "selectData",
      "name": "selectData",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "String",
        "resolved": "String",
        "references": {
          "String": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "hoverItem",
      "name": "hoverItem",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "numberOfClicks",
      "name": "numberOfClicks",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }, {
      "method": "todoCompleted",
      "name": "todoCompleted",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
