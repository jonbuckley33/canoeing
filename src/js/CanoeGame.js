import * as PIXI from 'pixi.js'
import Canoe from './canoe/Canoe.js'
import River from './River.js'

export default class CanoeGame {
  constructor(app) {
    this.app = app;
  }
  
  start() {
    let river = new River(this.app);
    let canoe = new Canoe(this.app);
    
    this.app.stage.addChild(river);

    river.addCanoe(canoe);

    this.app.ticker.add((delta) => {
      river.update(delta);
      canoe.update(delta);
    });
  }
}