const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 600;
let gameSpeed = 3;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'images/darksky.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'images/back.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'images/building2.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'images/building1.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'images/shop.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'images/road&lamps.png';

class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 1000;
        this.height = 600;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed;
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backgroundLayer1, 0.3);
const layer2 = new Layer(backgroundLayer2, 0.5);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);
const layer5 = new Layer(backgroundLayer5, 0.8);
const layer6 = new Layer(backgroundLayer6, 0.9);

const gameObjects = [layer1, layer2, layer3, layer4, layer5, layer6];

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
       object.update();
       object.draw();
    });
    requestAnimationFrame(animate);
};
animate();
