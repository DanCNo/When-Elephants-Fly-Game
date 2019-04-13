const CONSTANTS = {
  GRAVITY: 0.3,
  TERMINAL_VELOCITY: 0.8,
  LIFT_VEL_MULTIPLYER: 0.5,
};

class Airplane {
  constructor(dimensions){
    this.dimensions = dimensions;
    this.x = 50;
    this.y = 50;
    this.vertvel = 0;
  }

  drawAirplane(ctx){
    let spriteAirplane = new Image();

    spriteAirplane.src = "../assets/images/airplane.png";
    

    let xpos = Math.floor(this.x);
    let ypos = Math.floor(this.y);
    ctx.drawImage(spriteAirplane, 0, 0, 100, 100, xpos, ypos, 30, 30);
  }

  moveAirplane(){
    this.y += this.vertvel;
    this.vertvel += CONSTANTS.GRAVITY;

    if (Math.abs(this.vertvel) > CONSTANTS.TERMINAL_VELOCITY) {
      if(this.vertvel > 0){
        this.vertvel = CONSTANTS.TERMINAL_VELOCITY;
      } else {
        this.vertvel = CONSTANTS.TERMINAL_VELOCITY * -1;
      }
    }
  }

  animate(ctx){
    this.moveAirplane();
    this.drawAirplane(ctx);
  }
}

export default Airplane;