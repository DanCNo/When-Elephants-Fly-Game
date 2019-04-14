const CONSTANTS = {
  UPDRAFT_SPEED: 2,
  EDGE_BUFFER: 25,
};

class Updraft {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.frameCount = 0;

    const firstUpdraftPos = this.dimensions.width * 0.6;

    this.updrafts = [
      this.randomUpdraft(firstUpdraftPos),
      this.randomUpdraft(firstUpdraftPos + Math.floor(Math.random() * firstUpdraftPos)),
      this.randomUpdraft(firstUpdraftPos + Math.floor(Math.random() * firstUpdraftPos * 1.5)),
      this.randomUpdraft(firstUpdraftPos + Math.floor(Math.random() * firstUpdraftPos * 2)),
      this.randomUpdraft(firstUpdraftPos + Math.floor(Math.random() * firstUpdraftPos * 2.5)),
      this.randomUpdraft(firstUpdraftPos + Math.floor(Math.random() * firstUpdraftPos * 3)),
    ];
  }

  randomUpdraft(xpos) {

    const randomHeight = Math.floor(Math.random() * 200) + 200 + CONSTANTS.EDGE_BUFFER;
   
    const updraft = {
      xpos: xpos,
      ypos: randomHeight,
      left: xpos,
      right: xpos + 50,
      top: randomHeight,
      bottom: randomHeight + 50,
    };
    
    return updraft;
  }

  moveUpdraft() {
    
    this.eachUpdraft((updraft) => {
      
      updraft.xpos -= CONSTANTS.UPDRAFT_SPEED;
      updraft.left = updraft.xpos;
      updraft.right = updraft.xpos + 50;

      if (updraft.xpos < - 100) {
        updraft.xpos = this.dimensions.width + Math.floor(Math.random() * this.dimensions.width);
        updraft.ypos = Math.floor(Math.random() * 200) + 200 + CONSTANTS.EDGE_BUFFER;
        updraft.left = updraft.xpos;
        updraft.right = updraft.xpos + 50;
        updraft.top = updraft.ypos;
        updraft.bottom = updraft.ypos + 50;
      }
    });
  }

  drawUpdraft(ctx) {
    this.eachUpdraft((updraft) => {

      if (this.frameCount > 60) {
        this.frameCount = 0;
      } else {
        this.frameCount += 1;
      }

      let spriteFrame = Math.floor(this.frameCount / 10);

      const width = 96;
      
      let spriteUpdraft = new Image();

      spriteUpdraft.src = "../When-Elephants-Fly-Game/assets/images/updraft.png";

      let xpos = Math.floor(updraft.xpos);
      let ypos = Math.floor(updraft.ypos);
      ctx.drawImage(spriteUpdraft, 0 + (width * spriteFrame), 0, 90, 90, xpos, ypos, 50, 50);

    });
  }

  animate(ctx) { 
    this.moveUpdraft(); 
    this.drawUpdraft(ctx);
  }

  eachUpdraft(callback) {
    this.updrafts.forEach(callback.bind(this));
  }

}

export default Updraft;