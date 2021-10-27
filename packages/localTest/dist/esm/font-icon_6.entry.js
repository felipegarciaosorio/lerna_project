import { r as registerInstance, h, c as createEvent } from './index-68fa2037.js';

const fontawesomeIconCss = "icons-fontawesome i{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}";

const FontawesomeIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    // This component will get access
    // to config if slotted inside root.
    console.log(this.config);
  }
  render() {
    return [
      h("slot", { name: "items" }, h("i", { class: this.icon }))
    ];
  }
  static get assetsDirs() { return ["assets"]; }
};
FontawesomeIcon.style = fontawesomeIconCss;

const intCardCss = ".int-card-wrapper{width:600px;margin:50px;padding:20px;border-radius:10%;border:3px solid #ccc;display:inline-block;font-family:\"system-ui\"}.card-custom{width:250px;margin:20px;padding:20px;border-radius:10%;border:2px solid rgb(102, 15, 15)}button{border:none;color:white;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;background-color:#008cba;margin-right:30px}.btn-angular{background-color:#f44336}.my-input-textbox{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}";

const IntCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    let angularContent = (h("div", null, h("div", { class: "card-custom", id: "angular-div" }, "Hello from angular", h("br", null), "Live Users ", h("span", null, this.myAngularUsers), h("button", { class: "btn-angular small-btn", onClick: this.fetchMyDataFromAPI.bind(this, 'angular') }, "Get Angular Users"), h("br", null))));
    let stencilContent = (h("div", null, h("div", { class: "card-custom", id: "stencil-div" }, "Hello from stencil", h("br", null), h("br", null), "Live Users ", h("span", null, this.myStencilUsers), h("button", { class: "btn-stencil small-btn", onClick: this.fetchMyDataFromAPI.bind(this, 'stencil') }, "Get Stencil Users"), h("br", null))));
    let contentToDisplay = '';
    if (this.showAngularTab) {
      contentToDisplay = angularContent;
    }
    else if (this.showStencilTab) {
      contentToDisplay = stencilContent;
    }
    let mainContent = (h("div", null, h("div", { class: "int-card-wrapper" }, h("h1", null, "Hi ", this.userName), h("h5", null, this.APIData), h("button", { class: "btn-stencil small-btn", onClick: this.onContentChange.bind(this, 'stenciltab') }, "Get Stencil Users"), h("button", { class: "btn-angular small-btn", onClick: this.onContentChange.bind(this, 'angulartab') }, "Get Angular Users"), contentToDisplay, h("h", null), h("h3", null, "Two way data binding in stencil"), h("input", { type: "text", class: "my-input-textbox", onInput: this.onUserInput.bind(this), value: this.userName }), h("int-search", { "search-text": "bmw" }))));
    return mainContent;
  }
  static get watchers() { return {
    "userName": ["watchHandler"]
  }; }
};
IntCard.style = intCardCss;

const intNavbarCss = ":host{display:block}.top{background:#20355b;font-size:13px;color:#fff;position:fixed;top:0;width:100%;z-index:2;padding:0 16px;align-items:center;white-space:nowrap;left:0}.logo img{height:40px}";

const IntNavbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("div", { class: "top" }, h("div", { class: "applogo" }, h("a", { href: "#/home", class: "logo" }, h("img", { src: this.logoImage, alt: "Intelepeer" }))))
    ];
  }
};
IntNavbar.style = intNavbarCss;

const searchCss = ".main-search-div{font-family:\"system-ui\";width:300px;margin:50px;padding:20px;border-radius:10%;border:2px solid #ccc;display:inline-block}.my-input-textbox{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}#api-table{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%}#api-table td,#api-table th{border:1px solid #ddd;padding:8px}#api-table tr:nth-child(even){background-color:#f2f2f2}#api-table tr:hover{background-color:#ddd}#api-table tr{cursor:pointer}#api-table th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white}";

const searchWorld = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.searchWoldNameSelected = createEvent(this, "searchWoldNameSelected", 7);
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
    return (h("div", { class: "main-search-div" }, h("input", { class: "my-input-textbox", type: "text", value: this.searchText, onInput: this.onUserInput.bind(this) }), h("button", { class: "btn-react", onClick: this.searchFromAPI.bind(this) }, "Search it!"), h("hr", null), h("br", null), " ", h("br", null), h("table", { id: "api-table" }, this.searchResult.map(r => (h("tr", { onClick: this.onRowClick.bind(this, r.name) }, h("td", null, r.name), h("td", null, r.marketOpen)))))));
  }
};
searchWorld.style = searchCss;

const intSidenavCss = ".sidebar{width:30px;position:absolute;top:0;left:0;background:#fff;height:100%;padding-top:2%}.sidebar-panel{width:100%;height:100%;border-right:solid 1px rgba(0, 0, 0, .12)}.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}.w3-dropdown-hover:hover>.w3-button:first-child,.w3-dropdown-click:hover>.w3-button:first-child{background-color:#ccc;color:#000}.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}.w3-bar .w3-button{white-space:normal}.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}.w3-button:hover{color:#000!important;background-color:#ccc!important}.test{width:25%}";

const IntSidenav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  todoCompletedHandler(event) {
    console.log('Received event: ', event);
  }
  render() {
    return [
      h("div", { class: "sidebar" }, h("ul", { class: "sidebar-panel" }, h("side-item", { name: "testName", onClick: ev => this.todoCompletedHandler(ev) }, h("slot", null)))),
    ];
  }
};
IntSidenav.style = intSidenavCss;

const intSideItemCss = ".side-item{color:#ababab;cursor:pointer;display:block;height:48px;padding-top:8px}li:hover{background-color:lightgray}";

const IntSideItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectData = createEvent(this, "selectData", 7);
    this.hoverItem = createEvent(this, "hoverItem", 7);
    this.numberOfClicks = createEvent(this, "numberOfClicks", 7);
    this.todoCompleted = createEvent(this, "todoCompleted", 7);
  }
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
      h("li", { class: "side-item", value: this.name, onClick: (ev) => this.todoCompletedHandler(ev) }, h("slot", null))
    ];
  }
};
IntSideItem.style = intSideItemCss;

export { FontawesomeIcon as font_icon, IntCard as int_card, IntNavbar as int_navbar, searchWorld as int_search, IntSidenav as int_sidebar, IntSideItem as int_sideitem };
