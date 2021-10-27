import { EventEmitter } from '../../stencil-public-runtime';
export declare class IntSideItem {
  name: string;
  selectData: EventEmitter<String>;
  hoverItem: EventEmitter;
  numberOfClicks: EventEmitter<number>;
  todoCompleted: EventEmitter;
  todoCompletedHandler(todo: any): void;
  onSelect(): void;
  render(): any[];
}
