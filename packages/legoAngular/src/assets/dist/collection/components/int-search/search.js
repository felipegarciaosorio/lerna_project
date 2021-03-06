import { Component, Event, h, Prop, State } from "@stencil/core";
export class searchWorld {
  constructor() {
    this.searchResult = [];
  }
  onUserInput(event) {
    this.userInput = event.target.value;
    this.searchText = this.userInput;
  }
  searchFromAPI() {
    fetch('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + this.searchText + '&apikey=865I8ZLN51M0ZVJY')
      .then(res => {
      console.log('+++++++res+++++++');
      console.dir(res);
      return res.json();
    })
      .then(parsedRes => {
      var metaData = parsedRes['bestMatches'];
      this.searchResult = metaData.map(d => {
        return {
          name: d['2. name'],
          marketOpen: d['5. marketOpen'],
        };
      });
      console.log(this.searchResult);
    });
  }
  onRowClick(name) {
    this.searchWoldNameSelected.emit(name);
  }
  render() {
    return (h("div", { class: "main-search-div" },
      h("input", { class: "my-input-textbox", type: "text", value: this.searchText, onInput: this.onUserInput.bind(this) }),
      h("button", { class: "btn-react", onClick: this.searchFromAPI.bind(this) }, "Search it!"),
      h("hr", null),
      h("br", null),
      " ",
      h("br", null),
      h("table", { id: "api-table" }, this.searchResult.map(r => (h("tr", { onClick: this.onRowClick.bind(this, r.name) },
        h("td", null, r.name),
        h("td", null, r.marketOpen)))))));
  }
  static get is() { return "int-search"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["search.css"]
  }; }
  static get styleUrls() { return {
    "$": ["search.css"]
  }; }
  static get properties() { return {
    "searchText": {
      "type": "string",
      "mutable": true,
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
      "attribute": "search-text",
      "reflect": false
    }
  }; }
  static get states() { return {
    "searchResult": {},
    "userInput": {}
  }; }
  static get events() { return [{
      "method": "searchWoldNameSelected",
      "name": "searchWoldNameSelected",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
