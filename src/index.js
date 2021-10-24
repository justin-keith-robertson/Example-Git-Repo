
let sonic;

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function setup() {
  createCanvas(1000, 1000);
  sonic = loadImage('../assets/sonic.png');
}

function draw() {
  if (mouseIsPressed) {
    clear();
    image(sonic, mouseX, mouseY, 50, 50);
  } else {
    fill(getRandomNumber(255), getRandomNumber(255), getRandomNumber(255));
    ellipse(mouseX, mouseY, 80, 80);
  }
}
