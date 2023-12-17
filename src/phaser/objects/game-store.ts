import {
  action, makeAutoObservable, observable
} from 'mobx';

export class GameStore {
  gameOver: boolean = false;
  score: number = 0;

  constructor () {
    makeAutoObservable(this, {
      gameOver: observable,
      score: observable,
      setGameOver: action,
      setScore: action,
      resetGame: action
    });
  }

  setGameOver (isGameOver: boolean) {
    this.gameOver = isGameOver;
  }

  setScore (score: number) {
    this.score = score;
  }

  resetGame () {
    this.gameOver = false;
    this.score = 0;
  }
}
