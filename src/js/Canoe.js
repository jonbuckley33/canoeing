import canoeImage from '../img/canoe.png'
import * as PIXI from 'pixi.js'

export default class Canoe extends PIXI.Sprite {
  constructor(app) {
    super(PIXI.Texture.from(canoeImage));

    // center the sprite's anchor point
    this.anchor.set(0.5);

    // Listen for animate update
    app.ticker.add((delta) => {
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      // creates frame-independent transformation
      this.rotation += 0.1 * delta
    });
  }
}