import Phaser from 'phaser';

class Rectangle extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'rectangle');

    this.x = x;
    this.y = y;
    this.visible = false,
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setImmovable(true).setDisplaySize(700, 10);
  }
}

export default Rectangle;
