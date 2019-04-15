const CONSTANTS = {
  GRAVITY: 0.3,
  TERMINAL_VELOCITY: 1,
  LIFT_VEL_MULTIPLYER: 0.7,
  PLANE_WIDTH: 25,
  PLANE_HEIGHT: 18,
};

class Airplane {
  constructor(dimensions){
    this.dimensions = dimensions;
    this.angle = 0;
    this.x = 50;
    this.y = 50;
    this.vertvel = 0;
    this.frameAngleUpCount = 0;
  }



  changeAngle(angleDir) {
    if(angleDir === 1){
      this.angle = 1;
    }
    if(angleDir === 0){
      this.angle = 0;
    }
    if(angleDir === -1){
      this.angle = -1;
    }
  }

  drawAirplane(ctx){
    let spriteAirplane = new Image();

    spriteAirplane.src = "../When-Elephants-Fly-Game/assets/images/airplane.png";
    

    let xpos = Math.floor(this.x);
    let ypos = Math.floor(this.y);

    const width = 34;
    let spriteFrame = this.angle + 1;

    //TESTING
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(xpos, ypos, 25, 18);
    
    ctx.drawImage(spriteAirplane, 0 + (width * spriteFrame), 0, 34, 34, xpos, ypos, 34, 34);
  }

  moveAirplane(){

    if(this.angle === 1){
      if(this.frameAngleUpCount > 30){
        this.frameAngleUpCount = 0;
        this.angle = 0;
      } else {
        this.frameAngleUpCount += 1;
      }
      
    }

    this.y += this.vertvel;
    this.vertvel += CONSTANTS.GRAVITY;

    if(this.angle === 1){
      this.vertvel -= (1 * CONSTANTS.LIFT_VEL_MULTIPLYER);
    } else if(this.angle === -1){
      this.vertvel -= (-1 * CONSTANTS.LIFT_VEL_MULTIPLYER);
    }

    if (Math.abs(this.vertvel) > CONSTANTS.TERMINAL_VELOCITY) {
      if(this.vertvel > 0){
        if(this.angle !== -1){
          this.vertvel = CONSTANTS.TERMINAL_VELOCITY;
        } else {
          this.vertvel = 2 * CONSTANTS.TERMINAL_VELOCITY;
        }
      } else {
        this.vertvel = CONSTANTS.TERMINAL_VELOCITY * -1;
      }
    }
  }

  boostAirplane(){
    this.vertvel -= 50;
  }

  animate(ctx){
    this.moveAirplane();
    this.drawAirplane(ctx);
  }

  bounds() {
    return {
      left: this.x,
      right: this.x + CONSTANTS.PLANE_WIDTH,
      top: this.y,
      bottom: this.y + CONSTANTS.PLANE_HEIGHT,
    };
  }

  outOfBounds() {
    // const tooHigh = this.y < 0;
    const tooLow = this.y + CONSTANTS.PLANE_HEIGHT > this.dimensions.height;
    return tooLow;
  }
}

export default Airplane;