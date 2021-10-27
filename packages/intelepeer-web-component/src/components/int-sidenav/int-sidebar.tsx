import { Component, h, Listen } from '@stencil/core';


@Component({
  tag: 'int-sidebar',
  styleUrl: 'int-sidenav.css',
  shadow: false,
})

export class IntSidenav {

  @Listen('todoCompleted')
  todoCompletedHandler(event: CustomEvent) {
    console.log('Received event: ', event);
  }

  render() {
    return [
    <div class="sidebar">
      <ul class="sidebar-panel">
        <side-item name="testName" onClick={ev => this.todoCompletedHandler(ev)}>
          <slot />
        </side-item>
      </ul>
    </div>,
    ];
  }
}
