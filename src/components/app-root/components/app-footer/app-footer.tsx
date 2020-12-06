import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss'
})
export class AppFooter {
  render() {
    return (
      <footer>
        <div class="footer footer--wrapper">
          <div class="footer footer__navigation">
            <nav class="menu">
              <ul class="menu--extended menu__extended-items">
                  <li class="menu--extended menu__item">Terms and Conditions</li>
                  <li class="menu--extended menu__item">Privacy Policy</li>
                  <li class="menu--extended menu__item">Contact Us</li>
              </ul>
            </nav>
          </div>
          <div class="footer footer__social-networks">
            <span class="follow-us font font--medium-size">Follow us</span>
              <i class={`icon icon--fb-icon`}></i>
              <i class={`icon icon--tw-icon`}></i>
          </div>
        </div>
      </footer>
    );
  }
}
