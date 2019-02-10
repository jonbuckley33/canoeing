import riverTexture from '../img/river.jpg'
import * as PIXI from 'pixi.js'

export default class River extends PIXI.Sprite {

  constructor(app) {
    super(PIXI.Texture.from(riverTexture));

    this.width = app.screen.width;
    this.height = app.screen.height;
  }

  addCanoe(canoe) {
    this.addChild(canoe);

    // move the sprite to the center of the screen
    canoe.x = this.width / 2;
    canoe.y = this.height / 2;
  }
}