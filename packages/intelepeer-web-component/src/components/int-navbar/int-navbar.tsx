import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'int-navbar',
  styleUrl: 'int-navbar.css',
  shadow: true,
})
export class IntNavbar {

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
