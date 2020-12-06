import { Component, h, State } from '@stencil/core';
import { IMG } from '../../../../../../utils/constants';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.scss'
})
export class AppMenu {
  @State() collapsableStatus = 'none';

  toggleCollapsableMenu = (status) => {
    this.collapsableStatus = status === 'none' ? 'block' : 'none';
  }

  render() {
    return [
        <nav class="menu menu--extended">
            <div class="menu--extended">
            <ul class="menu--extended menu__extended-items">
                <li class="menu--extended menu__item">
                    <stencil-route-link url="/PastTrials" class="menu--extended menu__link"
                    activeClass="active" exact={true}>Past Trials</stencil-route-link>
                </li>
                <li class="menu--extended menu__item">
                    <stencil-route-link url="/HowItWorks" class="menu--extended menu__link"
                    activeClass="active" exact={true}>How It Works</stencil-route-link>
                </li>
                <li class="menu--extended menu__item">
                    <stencil-route-link url="/Register" class="menu--extended menu__link"
                    activeClass="active" exact={true}>Log In / Sign Up</stencil-route-link>
                </li>
                <li class="menu--extended menu__item">
                <img src={IMG.lens} class="lens" />
                </li>
            </ul>
            </div>
        </nav>,
        <nav class="menu menu--collapsable">
          <div class="menu--collapsable">
            <ul class="menu--collapsable menu__collapsable-items">
                <li class="menu__collapsable-item">
                  <button onClick={() => this.toggleCollapsableMenu(this.collapsableStatus)}>MENU</button>
                </li>
                <li>
                  <ul class="menu__collapsable-sub-items" style={{ display: this.collapsableStatus }}>
                    <li class="menu__collapsable-item">
                        <stencil-route-link
                        url="/PastTrials" 
                        class="menu__collapsable-link"
                        activeClass="active" exact={true} 
                        onClick={() => this.toggleCollapsableMenu(this.collapsableStatus)}>
                          Past Trials
                        </stencil-route-link>
                    </li>
                    <li class="menu__collapsable-item">
                        <stencil-route-link
                        url="/HowItWorks"
                        class="menu__collapsable-link"
                        activeClass="active" exact={true} 
                        onClick={() => this.toggleCollapsableMenu(this.collapsableStatus)}>
                          How It Works
                        </stencil-route-link>
                    </li>
                    <li class="menu__collapsable-item">
                        <stencil-route-link
                        url="/Register"
                        class="menu__collapsable-link"
                        activeClass="active" exact={true} 
                        onClick={() => this.toggleCollapsableMenu(this.collapsableStatus)}>
                          Log In / Sign Up
                        </stencil-route-link>
                    </li>
                  </ul>
                </li>
            </ul>
        </div>
      </nav>
    ];
  }
}
