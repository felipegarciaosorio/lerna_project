import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'int-sideitem',
  styleUrl: 'int-side-item.css',
  shadow: false,
})


export class IntSideItem {

  @Prop() name: string;
  @Event() selectData: EventEmitter<String>;
  @Event() hoverItem: EventEmitter;
  @Event() numberOfClicks: EventEmitter<number>;

  @Event({
    eventName: 'todoCompleted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) todoCompleted: EventEmitter;


  todoCompletedHandler(todo) {
    console.log('+++++++++++++')
    console.dir(todo)
    this.todoCompleted.emit(todo);
  }

  onSelect() {  
    this.selectData.emit(this.name);
    alert('OK')
  }


  render() {
    return [
     <li class="side-item" value={this.name} onClick={(ev) => this.todoCompletedHandler(ev)} > 
      <slot />
     </li>
    ];
  }
}
