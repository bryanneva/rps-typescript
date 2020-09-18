import {RPS} from "./rps/RPS";
import {UiViewModel} from "./web-ui/UiViewModel";
import {UiResultsObserver} from "./web-ui/UiResultsObserver";

const rps = new RPS();
let uiResultsObserver = new UiResultsObserver();

document.addEventListener("DOMContentLoaded", () => {
  const app = new UiViewModel(rps, uiResultsObserver);
  app.bindListeners();
});
