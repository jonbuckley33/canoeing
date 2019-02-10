import * as PIXI from 'pixi.js'
import Canoe from './Canoe.js'
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
  }
}