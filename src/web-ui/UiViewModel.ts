import {ResultsObserver, RPS} from "../rps/RPS";

export class UiViewModel {
  private rps: RPS;
  private p1Input$: HTMLInputElement;
  private p2Input$: HTMLInputElement;
  private playButton$: HTMLButtonElement;

  constructor(rps: RPS, resultsObserver: ResultsObserver) {
    this.rps = rps;
    this.p1Input$ = document.getElementById("p1") as HTMLInputElement;
    this.p2Input$ = document.getElementById("p2") as HTMLInputElement;
    this.playButton$ = document.getElementById("playRps") as HTMLButtonElement;
  }

  bindListeners() {
    this.p1Input$.addEventListener("change", this.onP1Change.bind(this));
    this.p2Input$.addEventListener("change", this.onP2Change.bind(this));
    this.playButton$.addEventListener("click", this.onPlayButtonClick.bind(this));
  }

  onP1Change(event: HTMLElementEventMap["change"]) {
    console.log('p1 changed', this.p1Input$.value);
  }

  onP2Change(event: HTMLElementEventMap["change"]) {
    console.log('p2 changed', event.target, this.p2Input$.value);
  }

  onPlayButtonClick(event: HTMLElementEventMap["click"]) {
    console.log('play button clicked', event.target);
  }
}
