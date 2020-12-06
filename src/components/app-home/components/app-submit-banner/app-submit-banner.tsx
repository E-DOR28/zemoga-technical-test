import { Component, h } from '@stencil/core';
import { IMG } from '../../../../utils/constants';

@Component({
  tag: 'app-submit-banner',
  styleUrl: 'app-submit-banner.scss',
  shadow: true
})

export class AppSubmitBanner {
  render() {
    return (
        <div class="banner banner--rectangle">
            <img src={IMG.footerBanner} class="banner__background" />
            <span style={{ fontSize: '35px' }}>Is there anyone else you would want us to add?</span>
            <button class='button button--border'>Submit a Name</button>
        </div>
    );
  }
}
