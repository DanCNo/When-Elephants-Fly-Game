const CONSTANTS = {
  ELEPHANT_SPEED: 10,
  EDGE_BUFFER: 0,
  X_OFFSET: 25,
  Y_OFFSET: 36,
  ELEPHANT_WIDTH: 78,
  ELEPHANT_HEIGHT: 60,
};

class Elephant {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.frameCount = 0;

    const firstElephantPos = this.dimensions.width + 10;

    this.elephants = [
      this.randomElephant(firstElephantPos),
      this.randomElephant(firstElephantPos + 100 + Math.floor(Math.random() * firstElephantPos)),
      this.randomElephant(firstElephantPos + 100 + Math.floor(Math.random() * firstElephantPos * 2)),
      this.randomElephant(firstElephantPos + 100 + Math.floor(Math.random() * firstElephantPos * 3)),
    ];
  }

  randomElephant(xpos) {

    const randomHeight = Math.floor(Math.random() * 400) + CONSTANTS.EDGE_BUFFER;

    const elephant = {
      xpos: xpos,
      ypos: randomHeight,
      left: xpos + CONSTANTS.X_OFFSET,
      right: xpos + CONSTANTS.X_OFFSET + CONSTANTS.ELEPHANT_WIDTH,
      top: randomHeight + CONSTANTS.Y_OFFSET,
      bottom: randomHeight + CONSTANTS.Y_OFFSET + CONSTANTS.ELEPHANT_HEIGHT,

    };

    return elephant;
  }

  moveElephant() {

    this.eachElephant((elephant) => {

      elephant.xpos -= CONSTANTS.ELEPHANT_SPEED;
      elephant.left = elephant.xpos + CONSTANTS.X_OFFSET;
      elephant.right = elephant.xpos + CONSTANTS.X_OFFSET + CONSTANTS.ELEPHANT_WIDTH;

      if(elephant.xpos < - 100){
        elephant.xpos = this.dimensions.width + Math.floor(Math.random() * this.dimensions.width);
        elephant.ypos = Math.floor(Math.random() * 400);
        elephant.left = elephant.xpos + CONSTANTS.ELEPHANT_WIDTH;
        elephant.right = elephant.xpos + CONSTANTS.X_OFFSET + CONSTANTS.ELEPHANT_WIDTH;
        elephant.top = elephant.ypos + CONSTANTS.Y_OFFSET;
        elephant.bottom = elephant.ypos + CONSTANTS.Y_OFFSET + CONSTANTS.ELEPHANT_HEIGHT;
      }
    });
  }

  drawElephant(ctx) {
    this.eachElephant((elephant) => {

      if(this.frameCount > 80){
        this.frameCount = 0;
      } else {
        this.frameCount += 1;
      }

      let spriteFrame = Math.floor(this.frameCount / 10);

      const width = 162;

      let spriteElephant = new Image();

      spriteElephant.src = "../When-Elephants-Fly-Game/assets/images/elephant.png";

      let xpos = Math.floor(elephant.xpos);
      let ypos = Math.floor(elephant.ypos);
      
      ctx.drawImage(spriteElephant, 0 + (width * spriteFrame), 0, 160, 125, xpos, ypos, 130, 100);

    });
  }

  

  animate(ctx) {
    this.moveElephant();
    this.drawElephant(ctx);
  }


  eachElephant(callback) {
    this.elephants.forEach(callback.bind(this));
  }

}

export default Elephant;