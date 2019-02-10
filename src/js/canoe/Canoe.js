import canoeImage from '../../img/canoe.png'
import CanoeController from './CanoeController.js'
import * as PIXI from 'pixi.js'

const zeroSpeed = { x: 0.0, y: 0.0 };
const moveSpeed = { x: 0.5, y: -2.0 };    
const switchSideCostInFrames = 20;

export default class Canoe extends PIXI.Sprite {

  constructor(app) {
    super(PIXI.Texture.from(canoeImage));

    // center the sprite's anchor point
    this.anchor.set(0.5);

    this._isPaddlingLeft = true;
    this._switchSideRemainingFrames = 0;

    this.update = this._rest;

    new CanoeController().startControlling(this);
  }

  _rest(delta) {}

  _move(delta) {
    if (this._isPaddlingLeft) {
      this.x += -moveSpeed.x * delta;
      this.y += moveSpeed.y * delta;
    } else {
      this.x += moveSpeed.x * delta;
      this.y += moveSpeed.y * delta;
    }
  }

  _movePaddleToOtherSide(delta) {
    this._switchSideRemainingFrames -= delta;
    if (this._switchSideRemainingFrames <= 0) {
      this.update = this._move;
    }
  }

  startPaddling(side) {
    let requestToPaddleOnLeft = side == "LEFT";

    if (this._isPaddlingLeft === requestToPaddleOnLeft 
        && this._update === this._rest) {
      return;
    }

    this._switchSideRemainingFrames = switchSideCostInFrames;
    this._isPaddlingLeft = requestToPaddleOnLeft;
    this.update = this._movePaddleToOtherSide;    
  }

  stopPaddling(side) {
    let requestToStopPaddlingOnLeft = side == "LEFT";

    if (this._isPaddlingLeft === requestToStopPaddlingOnLeft) {
      this.update = this._rest;
    }
  }
}