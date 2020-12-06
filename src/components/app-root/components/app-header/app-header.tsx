import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {
  render() {
    return (
        <header class="header">
          <div class="header-wrapper">
            
            <div class="logo">
              <stencil-route-link url="/">
                Rule Of Thumb.
              </stencil-route-link>
            </div>

            <app-menu></app-menu>
            
          </div>
        </header>
    );
  }
}
