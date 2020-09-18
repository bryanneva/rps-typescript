export class RPS {

}

export interface ResultsObserver {
  p1Wins(): void;
  p2Wins(): void;
  tie(): void;
  invalid(): void;
}
