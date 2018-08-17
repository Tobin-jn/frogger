module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = 1;
  }

  // isCollidingWith(object) {
  //   return (
  //     this.x < this.frog.x + this.frog.width && 
  //     this.x + this.width > this.frog.x &&
  //     this.y < this.frog.y + this.frog.height &&
  //     this.y + this.height > this.frog.y
  //   );
  // }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    )
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}