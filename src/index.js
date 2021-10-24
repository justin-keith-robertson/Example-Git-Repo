function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(getRandomNumber(255), getRandomNumber(255), getRandomNumber(255));
  }
  ellipse(mouseX, mouseY, 80, 80);
}
