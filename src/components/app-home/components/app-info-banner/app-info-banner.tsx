import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-info-banner',
  styleUrl: 'app-info-banner.scss',
  shadow: true
})

export class AppInfoBanner {
  render() {
    return (
      <div class="banner banner--rectangle banner--grid-items">
        <div class="item-grid item-grid--item1">Speak out. Be heard. <b class="font--large-size">Be counted</b></div>
        <div class="item-grid item-grid--item2">
          The rule of thumb is a crowd source court of public opinion where anyone and everyone can speak out and speak freely. 
          It's easy. You share your opinion, we analyze and put the data in public report.
        </div>
        <div class="item-grid item-grid--item3"><button class='button button--no-border'>X</button></div>
      </div>
    );
  }
}
