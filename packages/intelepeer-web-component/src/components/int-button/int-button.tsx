import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'int-button',
  styleUrl: 'int-button.css',
  shadow: true,
})
export class IntButton {

  @Prop() logoImage: string;

  render() {
    return [
      <div class="top">
      <div class="applogo">
        <a href="#/home" class="logo">
            <img src={this.logoImage} alt="Intelepeer" />
        </a>
      </div>
    </div>
    ]
  }

}
