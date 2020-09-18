export class FooViewModel {
  private button$: HTMLButtonElement;
  private output$: HTMLElement;

  constructor() {
    this.button$ = document.getElementById("foo-button") as HTMLButtonElement;
    this.output$ = document.getElementById("foo-output");
  }

  bindListeners() {
    this.button$.addEventListener('click', this.onClick.bind(this));
  }

  onClick(_: HTMLElementEventMap['click']) {
    this.output$.innerText = 'Bar';
  };
}
