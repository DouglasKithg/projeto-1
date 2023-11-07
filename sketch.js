function setup() {
    createCanvas(400, 400);
  background("rgb(0,255,158)");
  }
  
  function draw() {
    stroke('blue')
    fill("pink")
  
    if(mouseIsPressed)  {
       rect(mouseX, mouseY, 20, 20);
    }
  }