import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'font-icon',
  styleUrls: ['fontawesome-icon.css'],
  assetsDirs: ['assets'],
  shadow: false,
})
export class FontawesomeIcon {
  @Prop() icon: string;
  @Prop() config: any;

  componentWillLoad() {
    // This component will get access
    // to config if slotted inside root.
    console.log(this.config);
  }

  render() {
    return [
        <slot name="items"><i class={ this.icon }></i></slot>
    ]
  }
}
