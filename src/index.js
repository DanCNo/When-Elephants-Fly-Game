import _ from 'lodash';

import WhenElephantsFly from './game';

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('game');
  
  const game = new WhenElephantsFly(gameCanvas);
  game.play();

});
