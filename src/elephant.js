const CONSTANTS = {
  ELEPHANT_SPEED: 6,
  EDGE_BUFFER: 0,
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
    };

    return elephant;
  }

  moveElephant() {

    this.eachElephant((elephant) => {

      elephant.xpos -= CONSTANTS.ELEPHANT_SPEED;

      if(elephant.xpos < - 100){
        elephant.xpos = this.dimensions.width + Math.floor(Math.random() * this.dimensions.width);
        elephant.ypos = Math.floor(Math.random() * 400);
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

      const width = 96;

      let spriteElephant = new Image();

      spriteElephant.src = "../assets/images/elephant.png";

      let xpos = Math.floor(elephant.xpos);
      let ypos = Math.floor(elephant.ypos);
      ctx.drawImage(spriteElephant, 0 + (width * spriteFrame), 0, 100, 100, xpos, ypos, 100, 100);

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