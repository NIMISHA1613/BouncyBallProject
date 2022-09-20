//Author : Nimisha Gosain

var bird;
var pipes = [];
var score = 0;
var gameOver = false;

function setup() {
  createCanvas(1200, windowHeight - 100);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.update();
  bird.show();
  if (gameOver === true) {
    frameRate(0);
    var mybutton = document.getElementById("restart");
    mybutton.style.display = "block";
    var canvas = document.getElementById("canvas");
    canvas.style.display = "block";
  }

  if (frameCount % 100 == 0) {
    document.getElementById("score").innerHTML = score += 10;

    pipes.push(new Pipe());
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      gameOver = true;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key == " ") {
    bird.up();
    // console.log("Space");
  }
}

function restartGame() {
  gameOver = false;
  var mybutton = document.getElementById("restart");
  mybutton.style.display = "none";
  var canvas = document.getElementById("canvas");
  canvas.style.display = "none";
  score = 0;
  frameRate(60);
  this.highlight = false;
  pipes = [];
}
