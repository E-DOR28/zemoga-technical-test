import { Component, h, State } from '@stencil/core';
import { dataStore } from '../../services/dataStore.service';
import { dataFeed } from '../../services/dataFeed.service';
import { isEmpty } from '../../utils/utils';
import { IMG } from '../../utils/constants';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  @State() candidates: any[] = [];

  componentWillLoad() {
    this.getCantidates();
  }

  async getCantidates() {
    const dataStored: any[] = dataStore.getData();
    if (isEmpty(dataStored)) {
      this.candidates = await dataFeed.getData();
      dataStore.createDataStorage(this.candidates);
    } else {
      this.candidates = dataStored;
    }
  }


  render() {
    return (
      <div class="app-home">

        <section>

          <div class="container container--header">
            <div class="container__background">
              <img src={IMG.headerBackground} />
            </div>
            <div class="content">
              <app-voting-box-sample />
            </div>

            <div class="container__footer" >
              <app-days-progress-bar />
            </div>
          </div>

        </section>

        <section>

          <div class="container">
            <div class="content">
              <app-info-banner />
              <div class="content__main">
                <span class="content__main title">Votes</span>
                <div class="content__main wrapper">
                  { this.candidates.map(boxData => <app-voting-box data={{...boxData}} />) }
                </div>
              </div>
              <app-submit-banner />

            </div>
          </div>

        </section>

      </div>
    );
  }
}
