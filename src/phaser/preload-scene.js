import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
  constructor () {
    super({ key: 'PreloadScene' });
  }

  preload () {
    this.load.image('prawn', './assets/prawn-small.png');
    this.load.image('game-over', './assets/game-over.png');
    this.load.image('rectangle', './assets/rectangle.png');
    this.load.image('santa-big-mouth', './assets/santa.png');
    this.load.audio('game-over', './assets/game-over.mp3');
  }

  create () {
    this.scene.start('MainScene');
  }
}
