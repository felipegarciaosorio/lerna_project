import { Component, h } from '@stencil/core';


export interface SomeValue {
  name: string;
  value: string;
}


@Component({
  tag: 'int-sidebar',
  styleUrl: 'int-sidebar.css',
  shadow: false,
})

export class IntSidenav {
  render() {
    return [
    <div class="sidebar">
      <ul class="sidebar-panel">
        <side-item>
          <slot />
        </side-item>
      </ul>
    </div>,
    ];
  }
}
