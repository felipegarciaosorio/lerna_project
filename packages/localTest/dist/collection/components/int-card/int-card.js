import { Component, h, Prop, State, Watch, Listen } from "@stencil/core";
export class IntCard {
  constructor() {
    this.showAngularTab = false;
    this.showStencilTab = false;
  }
  changeState() {
    this.userName = 'name has been updated!';
    this.APIData = 'we have data from api';
    //this.showCard = false
  }
  watchHandler(newValue, oldValue) {
    console.log('The new value of name is: ' + newValue + ' old value ' + oldValue);
  }
  //    componentWillUpdate(){
  //      console.log('componentWillUpdate')
  //   }
  onContentChange(content) {
    if (content == 'angulartab') {
      this.showAngularTab = true;
      this.showStencilTab = false;
    }
    else if (content == 'stenciltab') {
      this.showStencilTab = true;
      this.showAngularTab = false;
    }
    else {
      this.showAngularTab = false;
      this.showStencilTab = false;
    }
  }
  onUserInput(event) {
    this.userName = event.target.value;
  }
  seasearchWoldNameSelectedHandler(event) {
    console.dir(event);
    this.userName = event.detail;
    alert("caller this method");
  }
  componentWillLoad() {
    this.APIData = 'loading...';
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
      .then(res => {
      console.dir(res);
      return res.json();
    })
      .then(parsedRes => {
      var metaData = parsedRes['Meta Data'];
      var timeDateStencil = metaData['5. Output Size'];
      this.APIData = timeDateStencil;
    });
  }
  getStencilUserFromAPI() {
    this.myStencilUsers = 'loading data...';
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
      .then(res => {
      return res.json();
    })
      .then(parsedRes => {
      console.dir(parsedRes);
      var timeSeries = parsedRes['Time Series (5min)'];
      var timeDateStencil = timeSeries['2021-09-29 19:35:00'];
      this.myStencilUsers = timeDateStencil['5. volume'];
      console.log(this.myStencilUsers);
      console.log(timeSeries);
    }).catch(ex => { console.log(ex); });
  }
  getAngularUserFromAPI() {
    console.log('click');
    this.myAngularUsers = 'loading data...';
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
      .then(res => {
      return res.json();
    })
      .then(parsedRes => {
      var timeSeries = parsedRes['Time Series (5min)'];
      var timeDateReact = timeSeries['2021-09-29 17:55:00'];
      console.log(timeSeries);
      this.myAngularUsers = timeDateReact['5. volume'];
      console.log(this.myAngularUsers);
    });
  }
  fetchMyDataFromAPI(contentType) {
    if (contentType == 'stencil') {
      this.getStencilUserFromAPI();
    }
    else {
      this.getAngularUserFromAPI();
    }
  }
  render() {
    let angularContent = (h("div", null,
      h("div", { class: "card-custom", id: "angular-div" },
        "Hello from angular",
        h("br", null),
        "Live Users ",
        h("span", null, this.myAngularUsers),
        h("button", { class: "btn-angular small-btn", onClick: this.fetchMyDataFromAPI.bind(this, 'angular') }, "Get Angular Users"),
        h("br", null))));
    let stencilContent = (h("div", null,
      h("div", { class: "card-custom", id: "stencil-div" },
        "Hello from stencil",
        h("br", null),
        h("br", null),
        "Live Users ",
        h("span", null, this.myStencilUsers),
        h("button", { class: "btn-stencil small-btn", onClick: this.fetchMyDataFromAPI.bind(this, 'stencil') }, "Get Stencil Users"),
        h("br", null))));
    let contentToDisplay = '';
    if (this.showAngularTab) {
      contentToDisplay = angularContent;
    }
    else if (this.showStencilTab) {
      contentToDisplay = stencilContent;
    }
    let mainContent = (h("div", null,
      h("div", { class: "int-card-wrapper" },
        h("h1", null,
          "Hi ",
          this.userName),
        h("h5", null, this.APIData),
        h("button", { class: "btn-stencil small-btn", onClick: this.onContentChange.bind(this, 'stenciltab') }, "Get Stencil Users"),
        h("button", { class: "btn-angular small-btn", onClick: this.onContentChange.bind(this, 'angulartab') }, "Get Angular Users"),
        contentToDisplay,
        h("h", null),
        h("h3", null, "Two way data binding in stencil"),
        h("input", { type: "text", class: "my-input-textbox", onInput: this.onUserInput.bind(this), value: this.userName }),
        h("int-search", { "search-text": "bmw" }))));
    return mainContent;
  }
  static get is() { return "int-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["int-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["int-card.css"]
  }; }
  static get properties() { return {
    "userName": {
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
      "attribute": "user-name",
      "reflect": false
    }
  }; }
  static get states() { return {
    "APIData": {},
    "showAngularTab": {},
    "showStencilTab": {},
    "myStencilUsers": {},
    "myAngularUsers": {}
  }; }
  static get watchers() { return [{
      "propName": "userName",
      "methodName": "watchHandler"
    }]; }
  static get listeners() { return [{
      "name": "searchWoldNameSelected",
      "method": "seasearchWoldNameSelectedHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
