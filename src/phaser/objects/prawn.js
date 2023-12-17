import {
  randVelX,
  randVelY
} from './utils';
import Phaser from 'phaser';
import store from '../../stores';

export default class Prawn extends Phaser.Physics.Arcade.Sprite {
  constructor ({
    scene, rectangle
  }) {
    super(scene, null, null, 'prawn');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true)
      .setBounce(0.6)
      .setInteractive()
      .on('pointerdown', () => {
        store.gameStore.setScore(store.gameStore.score + 1);
        this.setVelocityY(randVelY());
        this.setVelocityX(randVelX());
      });

    this.setGravityY(1400);
    scene.tweens.add({
      targets: this,
      angle: 360,
      duration: 2000,
      repeat: -1
    });

    scene.physics.add.collider(this, rectangle, () => {
      store.gameStore.setGameOver(true);
    });
  }
}
