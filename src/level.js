import Updraft from "./aircurrent";

const CONSTANTS = {
  CLOUD_SPEED: 2,
  EDGE_BUFFER: 75,
};

class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;

    const firstCloudPos = this.dimensions.width + 10;
    
    this.clouds = [
      this.randomCloud(firstCloudPos),
      this.randomCloud(firstCloudPos + Math.floor(Math.random() * firstCloudPos)),
      this.randomCloud(firstCloudPos + Math.floor(Math.random() * firstCloudPos * 1.5)),
      this.randomCloud(firstCloudPos + Math.floor(Math.random() * firstCloudPos * 2)),
      this.randomCloud(firstCloudPos + Math.floor(Math.random() * firstCloudPos * 2.5)),
    ];

    this.updrafts = new Updraft(this.dimensions);

  }

  randomCloud(xpos) {

    const randomHeight = Math.floor(Math.random() * 400) + CONSTANTS.EDGE_BUFFER;

    const cloud = {
      xpos: xpos,
      ypos: randomHeight,
    };

    return cloud;
  }

  moveClouds(){
    this.eachCloud((cloud)=> {
      cloud.xpos -= CONSTANTS.CLOUD_SPEED;
    });
  }

  drawClouds(ctx){
    this.eachCloud((cloud) => {

      let spriteCloud = new Image();

      spriteCloud.src = "../assets/images/cloud.png";


      let xpos = Math.floor(cloud.xpos);
      let ypos = Math.floor(cloud.ypos);
      ctx.drawImage(spriteCloud, 0, 0, 100, 100, xpos, ypos, 200, 200);

    });
  }


  drawBackground(ctx){
    ctx.fillStyle = "lightskyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx){
    this.drawBackground(ctx);
    this.moveClouds();
    this.drawClouds(ctx);

    this.updrafts.moveUpdraft();
    this.updrafts.drawUpdraft(ctx);
  
  }

  eachCloud(callback) {
    this.clouds.forEach(callback.bind(this));
  }
  
}

export default Level;