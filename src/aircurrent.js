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
      this.randomUpdraft(firstUpdraftPos + Math.floor(Math.random() * firstUpdraftPos * 1.25)),
    ];
  }

  randomUpdraft(xpos) {

    const randomHeight = Math.floor(Math.random() * 200) + 200 + CONSTANTS.EDGE_BUFFER;
   
    const updraft = {
      xpos: xpos,
      ypos: randomHeight,
    };
    
    return updraft;
  }

  moveUpdraft() {
    
    this.eachUpdraft((updraft) => {
      
      updraft.xpos -= CONSTANTS.UPDRAFT_SPEED;
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

      spriteUpdraft.src = "../assets/images/updraft.png";

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