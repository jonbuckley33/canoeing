import keyboard from '../common/keyboard.js'

export default class CanoeController {

  startControlling(canoe) {
    this.canoe = canoe;   
    this.bindInput();   
  }

  bindInput() {
    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    left.press = () => {
      this.canoe.startPaddling('LEFT');
    };
    left.release = () => {
      this.canoe.stopPaddling('LEFT');
    }

    right.press = () => {
      this.canoe.startPaddling('RIGHT');
    };
    right.release = () => {
      this.canoe.stopPaddling('RIGHT');
    };
  }
}