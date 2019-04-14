const CONSTANTS = {
  ELEPHANT_SPEED: 6,
  EDGE_BUFFER: 0,
  ELEPHANT_WIDTH: 130,
  ELEPHANT_HEIGHT: 100,
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
      left: xpos + 25,
      right: xpos + 25 + 82,
      top: randomHeight + 55,
      bottom: randomHeight + 55 + 30,

    };

    return elephant;
  }

  moveElephant() {

    this.eachElephant((elephant) => {

      elephant.xpos -= CONSTANTS.ELEPHANT_SPEED;
      elephant.left = elephant.xpos + 25;
      elephant.right = elephant.xpos + 25 + 82;

      if(elephant.xpos < - 100){
        elephant.xpos = this.dimensions.width + Math.floor(Math.random() * this.dimensions.width);
        elephant.ypos = Math.floor(Math.random() * 400);
        elephant.left = elephant.xpos + 25;
        elephant.right = elephant.xpos + 25 + 82;
        elephant.top = elephant.ypos + 45;
        elephant.bottom = elephant.ypos + 45 + 30;
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

      spriteElephant.src = "../assets/images/elephant.png";

      let xpos = Math.floor(elephant.xpos);
      let ypos = Math.floor(elephant.ypos);

      // TESTING

      // ctx.fillStyle = 'red';
      // ctx.fillRect(xpos, ypos, 130, 100);
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