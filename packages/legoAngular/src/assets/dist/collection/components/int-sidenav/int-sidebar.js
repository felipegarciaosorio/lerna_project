import { Component, h, Listen } from '@stencil/core';
export class IntSidenav {
  todoCompletedHandler(event) {
    console.log('Received event: ', event);
  }
  render() {
    return [
      h("div", { class: "sidebar" },
        h("ul", { class: "sidebar-panel" },
          h("side-item", { name: "testName", onClick: ev => this.todoCompletedHandler(ev) },
            h("slot", null)))),
    ];
  }
  static get is() { return "int-sidebar"; }
  static get originalStyleUrls() { return {
    "$": ["int-sidenav.css"]
  }; }
  static get styleUrls() { return {
    "$": ["int-sidenav.css"]
  }; }
  static get listeners() { return [{
      "name": "todoCompleted",
      "method": "todoCompletedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
