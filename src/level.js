import Updraft from "./aircurrent";
import Elephant from "./elephant";

const CONSTANTS = {
  CLOUD_SPEED: 2,
  EDGE_BUFFER: 50,
};

class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;

    const firstCloudPos = Math.floor(Math.random() * this.dimensions.width);
    
    this.clouds = [
      this.randomCloud(firstCloudPos),
      this.randomCloud(firstCloudPos + Math.floor(Math.random() * firstCloudPos)),
      this.randomCloud(firstCloudPos + Math.floor(Math.random() * firstCloudPos * 1.5)),
      this.randomCloud(firstCloudPos + Math.floor(Math.random() * firstCloudPos * 2)),
      this.randomCloud(firstCloudPos + Math.floor(Math.random() * firstCloudPos * 2.5))
    ];

    this.updrafts = new Updraft(this.dimensions);

    this.elephants = new Elephant(this.dimensions);

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

      if(cloud.xpos < -100){
        cloud.xpos = this.dimensions.width + Math.floor(Math.random() * this.dimensions.width);
        cloud.ypos = Math.floor(Math.random() * 400) + CONSTANTS.EDGE_BUFFER;
      }
    });
  }

  drawClouds(ctx){
    this.eachCloud((cloud) => {

      let spriteCloud = new Image();

      spriteCloud.src = "../assets/images/cloud.png";


      let xpos = Math.floor(cloud.xpos);
      let ypos = Math.floor(cloud.ypos);
      ctx.drawImage(spriteCloud, 0, 0, 100, 100, xpos, ypos, 150, 150);

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

    this.elephants.moveElephant();
    this.elephants.drawElephant(ctx);
  
  }

  eachCloud(callback) {
    this.clouds.forEach(callback.bind(this));
  }

  collidesWith(airplane) {

    const _overlap = (obj1, obj2) => {
      if(obj1.left > obj2.right || obj1.right < obj2.left) {
        return false;
      }
      if(obj1.top > obj2.bottom || obj1.bottom < obj2.top) {
        return false;
      }
      return true;
    };

    let collision = false;
    this.elephants.eachElephant((elephant) => {
      if(_overlap(elephant, airplane)){
        collision = true;
      }
    });
    return collision;
  }

  givesBoost(airplane) {

    const _overlap = (obj1, obj2) => {
      if (obj1.left > obj2.right || obj1.right < obj2.left) {
        return false;
      }
      if (obj1.top > obj2.bottom || obj1.bottom < obj2.top) {
        return false;
      }
      return true;
    };

    let boost = false;
    this.updrafts.eachUpdraft((updraft) => {
      if (_overlap(updraft, airplane)) {
        boost = true;
      }
    });
    return boost;
  }
  
}

export default Level;