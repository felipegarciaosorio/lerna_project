import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'int-button',
  styleUrl: 'int-button.css',
  shadow: true,
})
export class IntButton {

  render() {
    return (
      <Host>
        <button><slot /></button>
      </Host>
    );
  }

}
