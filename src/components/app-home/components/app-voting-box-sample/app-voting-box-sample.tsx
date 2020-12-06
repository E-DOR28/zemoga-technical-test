import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-voting-box-sample',
  styleUrl: 'app-voting-box-sample.scss',
  shadow: true
})

export class AppVotingSample {
  render() {
    return (
      <div class="banner banner--square">
        <div class="banner__content">
          <span class="font font--no-margin">What's your opinion on</span>
          <span class="font font--xlarge-size font--no-margin-top">Pope Francis?</span>
          <span class="font font--xmedium-size">He's talking tough on clergy sexual abuse, but is he just another 
            papal pervert protector? (thumbs down) or a true pedophile 
            punishing pontiff? (thumbs up)</span>
          <span class="font font--medium-size">W <a class="link">More information</a></span>
          <span class="font font--xmedium-size">Whast's Your Veredict</span>
        </div>
        <div class="banner__footer">
          <div class="sample-button sample-button--thumbUp"></div>
          <div class="sample-button sample-button--thumbDown"></div>
        </div>
      </div>
    );
  }
}
