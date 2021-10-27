import { EventEmitter } from "../../stencil-public-runtime";
export declare class searchWorld {
  searchText: string;
  searchResult: {
    name: string;
    marketOpen: string;
  }[];
  userInput: string;
  onUserInput(event: Event): void;
  searchFromAPI(): void;
  searchWoldNameSelected: EventEmitter<string>;
  onRowClick(name: string): void;
  render(): any;
}
