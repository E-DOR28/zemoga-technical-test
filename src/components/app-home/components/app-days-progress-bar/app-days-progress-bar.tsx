import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-days-progress-bar',
  styleUrl: 'app-days-progress-bar.scss'
})

export class AppDaysProgress {
  render() {
    return (
      <div class="progress-bar">
        <div class="bar bar--left">
          <span class="text text__bar-label font--xmedium-size">CLOSING IN</span>
        </div>
        <div class="bar bar--right">
          <span class="text text__bar-value-label font--large-size"><b>22</b>days</span>
        </div>
        <div class="shape shape--triangle"></div>
      </div>
    );
  }
}
