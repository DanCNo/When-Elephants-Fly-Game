import Airplane from './airplane';
import Level from './level';

class WhenElephantsFly {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.airplane = new Airplane(this.dimensions);
    this.level = new Level(this.dimensions);
  }

  play() {
    this.running = true;
    this.animate();
  }
  
  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.airplane = new Airplane(this.dimensions);
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, 1000, 500);
    this.level.animate(this.ctx);
    this.airplane.animate(this.ctx);

    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

}

export default WhenElephantsFly;