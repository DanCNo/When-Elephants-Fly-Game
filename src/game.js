import Airplane from './airplane';
import Level from './level';
import Timer from 'easytimer.js';

class WhenElephantsFly {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.airplane = new Airplane(this.dimensions);
    this.level = new Level(this.dimensions);
    this.scoreTimer = document.getElementById("scoreTimer");
    this.timer = new Timer( {precision: "secondTenths"});
    this.aPressed = false;
    this.dPressed = false;
    this.score = 0;
    this.registerEvents();
    this.restart();
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);

  }

  addEventListeners() {
    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
    this.timer.addEventListener("secondTenthsUpdated", () => {
      this.score = (this.timer.getTimeValues().minutes * 600) + (this.timer.getTimeValues().seconds * 10) + this.timer.getTimeValues().secondTenths;
      this.scoreTimer.innerHTML = this.score;
    });
    
  }

  keyDownHandler(e){
    switch(e.key) {
      case ("a"):
        if(this.aPressed === false){
          this.aPressed = true;
          this.airplane.changeAngle(1);
        }
        
        break;

      case ("d"):
        if (this.aPressed === false) {
          this.aPressed = true;
          this.airplane.changeAngle(-1);
        }
        break;
    }
  }

  registerEvents() {
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  }

  click(e) {
    if (!this.running) {
      this.play();
      if(this.timer.isRunning){
        this.timer.reset();
      }
      

      
    }
  }

  keyUpHandler(e){
    switch (e.key) {
      case ("a"):
        this.aPressed = false;
        this.airplane.changeAngle(0);
        
        break;

      case ("d"):
        this.aPressed = false;
        this.airplane.changeAngle(0);

        break;
    }
  }

  play() {
    this.addEventListeners();
    this.running = true;
    this.timer.start({ precision: 'secondTenths' });
    this.animate();
    
  }
  
  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.airplane = new Airplane(this.dimensions);
    this.animate();
  }

  animate() {
    
    if(this.gameOver()){
      this.timer.pause({precision: "secondTenths"});
      document.getElementById("game-over-menu").style.display = "flex";
      document.getElementById("scoreDisplay").innerHTML = this.score;
      document.getElementById("retryButton").addEventListener("click", () => {
        document.getElementById("game-over-menu").style.display = "none";
        this.restart();
      });
      
    }else{
      this.ctx.clearRect(0, 0, 1000, 500);
      this.level.animate(this.ctx);
      this.airplane.animate(this.ctx);
  
      if(this.boosted()) {
        this.airplane.boostAirplane();
      }
  
  
      if (this.running) {
        requestAnimationFrame(this.animate.bind(this));
      }
    }
  }

  gameOver() {
    return (
      this.level.collidesWith(this.airplane.bounds()) || this.airplane.outOfBounds()
    );
  }

  boosted() {
    return (this.level.givesBoost(this.airplane.bounds()));
  }



}

export default WhenElephantsFly;