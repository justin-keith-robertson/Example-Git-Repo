function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(220, 230, 200);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
