import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
  constructor () {
    super({ key: 'PreloadScene' });
  }

  preload () {
    this.load.image('prawn', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/xmas2023/assets/prawn-small.png');
    this.load.image('rectangle', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/xmas2023/assets/rectangle.png');
    this.load.image('santa-big-mouth', 'https://cdn.jsdelivr.net/gh/roger-cm-ng/xmas2023/assets/santa.png');
  }

  create () {
    this.scene.start('MainScene');
  }
}
