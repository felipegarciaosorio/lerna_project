export declare class IntCard {
  userName: string;
  APIData: string;
  showAngularTab: boolean;
  showStencilTab: boolean;
  myStencilUsers: string;
  myAngularUsers: string;
  changeState(): void;
  watchHandler(newValue: boolean, oldValue: boolean): void;
  onContentChange(content: string): void;
  onUserInput(event: Event): void;
  seasearchWoldNameSelectedHandler(event: CustomEvent<string>): void;
  componentWillLoad(): void;
  getStencilUserFromAPI(): void;
  getAngularUserFromAPI(): void;
  fetchMyDataFromAPI(contentType: string): void;
  render(): any;
}
