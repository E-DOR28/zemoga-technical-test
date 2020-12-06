import { Component, Element, h, Prop, State } from '@stencil/core';
import { IMG, URLS } from '../../../../utils/constants';
import { dataStore } from './../../../../services/dataStore.service';

@Component({
  tag: 'app-voting-box',
  styleUrl: 'app-voting-box.scss',
})
export class AppVotingBox {
  @Element() host: HTMLElement;
  @Prop() data: any = {};
  @State() favorabilityDirection = 'Up';
  @State() alreadyVoted = false;
  
  selectedVoteOption = null;
  progressBar: any = null;

  componentWillLoad() {
    this.setHeaderIcon();
  }

  componentDidLoad() {
    this.getProgressBarComponent();
  }

  getProgressBarComponent() {
    this.progressBar = this.host.querySelector('app-progress-bar');
  }

  getSelectedVoteOption = (value) => {
    this.selectedVoteOption = value;
  }

  addNewVote = () => {
    this.data.votes.totalVotes++;
    this.selectedVoteOption === 'up' ? this.data.votes.upVote++ : this.data.votes.downVote++;

    dataStore.updateData(this.data);
    this.alreadyVoted = true;
    this.setHeaderIcon();
    if (this.progressBar) this.progressBar.reCalculateProgress();
  }

  AllowVoteAgain = () => {
    this.alreadyVoted = false;
  }

  setHeaderIcon = () => {
    this.favorabilityDirection = (this.data.votes.upVote - this.data.votes.downVote) > 0 ? 'Up' : 'Down';
  }

  renderVotingView = (): HTMLElement[] => {
    return [
      <div class="content__description">{this.data.description}</div>,
      <div class="content__footer">
        <div class="action-buttons-wrapper">
          <div class="action-buttons-wrapper__button">
              <input
                class="action-buttons-wrapper__button-radio"
                type="radio"
                name={`thumbDown_${this.data.id}`} value="up"
                id={`thumbUp_${this.data.id}`}
                onInput={(e: any) =>this.getSelectedVoteOption(e.target.value)}
              />
              <label class="action-buttons-wrapper__button-label" htmlFor={`thumbUp_${this.data.id}`}>
                <img src={IMG.thumbUp} class={'icon icon--thumbUp'} />
              </label>
          </div>
          <div class="action-buttons-wrapper__button">
              <input
                class="action-buttons-wrapper__button-radio"
                type="radio" name={`thumbDown_${this.data.id}`}
                value="down" id={`thumbDown_${this.data.id}`}
                onInput={(e: any) =>this.getSelectedVoteOption(e.target.value)}
              />
              <label class="action-buttons-wrapper__button-label" htmlFor={`thumbDown_${this.data.id}`}>
                <img src={IMG.thumbDown} class={'icon icon--thumbDown'} />
              </label>
          </div>
          <div class="action-buttons-wrapper__button">
            <button class="action-buttons-wrapper__button-button"
            onClick={this.addNewVote}>Vote Now</button>
          </div>
        </div>
      </div>
    ]
  };

  renderThanksView = (): HTMLElement[] => {
    return [
      <div class="content__description">Thanks for voting!</div>,
      <div class="content__footer">
        <div class="action-buttons-wrapper">
          <div class="action-buttons-wrapper__button">
            <button class="action-buttons-wrapper__button-button"
            onClick={this.AllowVoteAgain}>Vote again</button>
          </div>
        </div>
      </div>
    ]
  }

  render() {
    return (
      <div class="box">
        <div
          class="box__background" 
          style={{ 'background-image': `url(${URLS.cloudinary.votingBox}/${this.data.img})` }}
        />

        <div class="box__content">
          <div class="content">
            <div class="content content__header">
              <i class={`icon icon--thumb${this.favorabilityDirection}`}></i>
              <div class="title">
                <span class="title title--main">{this.data.name}</span>
                <span class="title title--footer"><b>{this.data.time}</b> {this.data.sector}</span>
              </div>
            </div>


            <div class="content content__vote-area">
              { !this.alreadyVoted ? this.renderVotingView() : this.renderThanksView() }
            </div>
            
          </div>

          <div class="footer">
            <app-progress-bar results={this.data.votes} />
          </div>
        </div>


      </div>
    );
  }
}
