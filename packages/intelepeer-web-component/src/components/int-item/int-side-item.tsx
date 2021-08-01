import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'int-sideitem',
  styleUrl: 'int-side-item.css',
  shadow: false,
})


export class IntSideItem {

  @Event() hoverItem: EventEmitter;
  @Event() numberOfClicks: EventEmitter<number>;


  render() {
    return [
     <li class="side-item"> 
      <slot />
     </li>
    ];
  }
}
