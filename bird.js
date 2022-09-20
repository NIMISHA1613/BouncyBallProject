//Author : Nimisha Gosain

function Bird() {
  this.y = height / 2;
  this.x = 50;

  this.gravity = 0.8;
  this.lift = 18;
  this.velocity = 0;
  this.img;

  this.show = function () {
    fill(1000, 100, 200);
    ellipse(this.x, this.y, 32, 32);
    // img = loadImage("/images/1.png");
    // image(img, this.x, this.y, 200, 300);
  };

  this.up = function () {
    this.velocity -= this.lift;
  };

  this.update = function () {
    this.velocity += this.gravity;
    this.velocity *= 0.9; // adding air resistance
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}
