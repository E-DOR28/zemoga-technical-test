import { Component, h, Method, Prop, State } from '@stencil/core';
import { IMG } from '../../../../../../utils/constants';

@Component({
  tag: 'app-progress-bar',
  styleUrl: 'app-progress-bar.scss'
})
export class AppProgressBar {
  @Prop() results: any = {};
  @State() reRender = null;

  thumbUpPercentage = 0;
  thumbDownPercentage = 0;


  componentWillLoad() {
    this.calculateProgress();
  }

  reRenderProgress() {
    this.reRender = new Date(); // This is only to generate a new value for the @State variable and force the render
  }

  calculateProgress = () => {
    this.thumbUpPercentage = Math.floor((this.results.upVote/this.results.totalVotes)*100);
    this.thumbDownPercentage =  100 - this.thumbUpPercentage;
  }

  @Method()
  reCalculateProgress() {
    this.calculateProgress();
    this.reRenderProgress();
  }
  

  render() {
    return (
        <div class='app-progress-bar app-progress-bar__wrapper'>
          <div
            class="app-progress-bar app-progress-bar__left-bar"
            style={{width:`${this.thumbUpPercentage}%`}}
          >
              <img src={IMG.thumbUp} class="icon icon--thumbUp" />
              <label class="label">{this.thumbUpPercentage} %</label>
          </div>
          <div 
            class="app-progress-bar app-progress-bar__right-bar"
            style={{width:`${this.thumbDownPercentage}%`}}
          >
              <label class="label">{this.thumbDownPercentage} %</label>
              <img src={IMG.thumbDown} class="icon icon--thumbDown" />
          </div>
        </div>
    );
  }
}
