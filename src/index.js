import logMessage from './js/logger'
import './css/style.css'
import * as PIXI from 'pixi.js'

import CanoeGame from './js/CanoeGame.js'

// Log message to console
logMessage('Welcome to Expack!')

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

let canoeGame = new CanoeGame(app);
canoeGame.start();
