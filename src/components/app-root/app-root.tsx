import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {
  render() {
    return (
      <div class="app-root">
        <app-header />
        <main>
          <stencil-router id="router">
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/PastTrials" routeRender={() => <single-page class="main-single-page">PAST TRIALS</single-page>} />
            <stencil-route url="/HowItWorks" routeRender={() => <single-page class="main-single-page">HOW IT WORKS</single-page>} />
            <stencil-route url="/Register" routeRender={() => <single-page class="main-single-page">LOG IN / SIGN UP</single-page>} />
          </stencil-router>
          <app-footer />
        </main>
      </div>
    );
  }
}
