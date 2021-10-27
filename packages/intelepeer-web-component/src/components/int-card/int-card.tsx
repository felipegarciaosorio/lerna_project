import { Component, h, Prop, State, Watch, Listen } from "@stencil/core";

@Component({
    tag: 'int-card',
    styleUrl: 'int-card.css',
    shadow: true,
  })
  
  
  export class IntCard { 
    @Prop({ mutable: true }) userName: string
    @State() APIData: string
    @State() showAngularTab: boolean = false
    @State() showStencilTab: boolean = false

    @State() myStencilUsers: string
   @State() myAngularUsers: string

    changeState(){
       this.userName = 'name has been updated!'
       this.APIData = 'we have data from api'
       //this.showCard = false
    }

    @Watch('userName')
     watchHandler(newValue: boolean, oldValue: boolean) {
       console.log('The new value of name is: ' + newValue + ' old value ' + oldValue);
     }


//    componentWillUpdate(){
//      console.log('componentWillUpdate')
//   }

   onContentChange(content: string) {
      if (content == 'angulartab') {
        this.showAngularTab = true;
        this.showStencilTab = false;
      } else if (content == 'stenciltab') {
        this.showStencilTab = true;
        this.showAngularTab = false;
      } else {
        this.showAngularTab = false;
        this.showStencilTab = false;
      }
    }

    onUserInput(event: Event) {
      this.userName = (event.target as HTMLInputElement).value;
    }

    @Listen('searchWoldNameSelected', {target: 'body'})
    seasearchWoldNameSelectedHandler(event:CustomEvent<string>){
      console.dir(event)
      this.userName = event.detail
      alert("caller this method")
    }

    componentWillLoad() {
      this.APIData = 'loading...';
      fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
        .then(res => {
           console.dir(res)
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
           console.dir(parsedRes)
          var timeSeries = parsedRes['Time Series (5min)'];
          var timeDateStencil = timeSeries['2021-09-29 19:35:00'];
          this.myStencilUsers = timeDateStencil['5. volume'];
          console.log(this.myStencilUsers);
          console.log(timeSeries);
        }).catch(ex => {console.log(ex)});
  
    }
  
    getAngularUserFromAPI() {
       console.log('click')
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

    fetchMyDataFromAPI(contentType: string) {
      if (contentType == 'stencil') {
        this.getStencilUserFromAPI();
      } else {
        this.getAngularUserFromAPI();
      }
    }

    render() {
        let angularContent = ( 
         <div>
            <div class="card-custom" id="angular-div">
             Hello from angular<br></br>Live Users <span>{this.myAngularUsers}</span>
             <button class="btn-angular small-btn" onClick={this.fetchMyDataFromAPI.bind(this, 'angular')}>Get Angular Users</button><br></br>
            </div>    
         </div>
         );

         let stencilContent = ( 
            <div>
               <div class="card-custom" id="stencil-div">
                Hello from stencil<br></br><br></br>
                Live Users <span>{this.myStencilUsers}</span>
                <button class="btn-stencil small-btn" onClick={this.fetchMyDataFromAPI.bind(this, 'stencil')}>Get Stencil Users</button><br></br>
               </div>    
            </div>
            );

            let contentToDisplay = '';

            if (this.showAngularTab) {
               contentToDisplay = angularContent;
             } else if (this.showStencilTab) {
               contentToDisplay = stencilContent;
             }

            let mainContent = ( 
                <div>
                   <div class="int-card-wrapper">
                    <h1>Hi {this.userName}</h1>
                    <h5>{this.APIData}</h5>
                    <button class="btn-stencil small-btn" onClick={this.onContentChange.bind(this, 'stenciltab')}>Get Stencil Users</button>
                    <button class="btn-angular small-btn" onClick={this.onContentChange.bind(this, 'angulartab')}>Get Angular Users</button>

                    {contentToDisplay}

                    <h></h>
                     <h3>Two way data binding in stencil</h3>

                     <input type="text" class="my-input-textbox" onInput={this.onUserInput.bind(this)} value={this.userName}></input>

                     <int-search search-text="bmw"></int-search>
                     
                   </div>    

                </div>
                );

         return mainContent;
      }
  }