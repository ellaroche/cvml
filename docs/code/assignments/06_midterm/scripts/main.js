let noiseVal;
//let noiseScale = 0.02;
//let size=2;
//let texCanvas;
let button;
let img;
var noise_slider;
var scale_slider;
let q;
let w;
let e;
let t;

function preload() {
  img = loadImage('images/xx.png');
  img2 = loadImage('images/magnet.png');
}

function setup() {
  createCanvas(500, 500);
  textCanvas = createGraphics(200, 200);
  noStroke();
  
  q = 10;
  w = 10;
  e = 10;
  t = 10;
  
  //noise_slider = createSlider(0, 100, .99);
  scale_slider = createSlider(0, 100, 3);
  //image(img, 10, 10, 50,50);
  
/*  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(loadVal);*/
}

function loadVal(){
  
}

function draw() {
  background(0);
  
  var noiseScale = noise_slider.value();
  var sizeScale = noise_slider.value();
  
  for(let y = 0; y < height; y+=sizeScale) {
    for(let x = 0; x < width; x+=sizeScale) {
      
      noiseVal = noise((x+frameCount/5)*noiseScale, (y+frameCount/5)*noiseScale);
    
      stroke(noiseVal*255);
      point(x, y);
      //texCanvas.ellipse(texImage);
    }
  }
    for (let x = 0; x < width; x++) {
    let noiseVal2 = noise((mouseX + x) * noiseScale, mouseY * noiseScale);
    fill(q, w, e, t);
    stroke(noiseVal2 * 255);
    ellipse(50, 50,mouseY + noiseVal2 * 80, mouseX + noiseVal2 * 80);
    }
  
  
  
  image(img, 0, 0, 500,500);
  image(img2, mouseX, mouseY, 20, 20);
  // let texImage = loadImage(texCanvas);
  
} 