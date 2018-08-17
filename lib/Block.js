const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color, dx, dxv);
    this.borderColor = borderColor;
  } 

  draw(ctx) {
    const {x, y, height, width, color, dx, dxv, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}