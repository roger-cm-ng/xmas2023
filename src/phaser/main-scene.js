import Phaser from 'phaser';

import Prawn from './objects/prawn';
import Rectangle from './objects/rectangle';

export default class MainScene extends Phaser.Scene {
  constructor () {
    super({ key: 'MainScene' });
  }

  create () {
    this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'santa-big-mouth');

    const rectangle = new Rectangle(this, this.cameras.main.width / 2, 1100);

    new Prawn({
      scene: this,
      rectangle
    });
  }
}
