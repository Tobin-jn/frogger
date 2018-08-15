const GamePiece = require('./GamePiece');

module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
    console.log('hi')
  }

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
    debugger;
  }
}