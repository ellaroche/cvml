let myCapture;
let slider;
//cut out slidre

function setup() {
  let canvas = createCanvas(320, 240);

  canvas.parent("sketch");
  
  myCapture = createCapture(VIDEO);
  myCapture.hide();
  fill(255, 70, 80);
  
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  
}

function draw() {
  background(5, 5, 5);
  //fill(random(255),random(255),random(255));
  
  //load pixel data into capture object
  myCapture.loadPixels();
  
  const stepSize = round(constrain(mouseX / 8, 6, 32));
    
  let val = slider.value();
  
  for(let y = 0; y < height; y+=stepSize){
    for(let x =0; x < width; x+=stepSize){
      const i = y * width + x;
      const darkness = (255 - myCapture.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      fill(random(255), random(255),random(255));
      ellipse(x, y, radius, radius);
      
   
      push();
      scale(-1, 1);
      translate(width, 0);
      ellipse(x, y, radius, radius);
      pop();
      
     
    
      
      
    }
  } 
}