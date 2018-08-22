const GamePiece = require('./GamePiece');


module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, onLog) {
    super(x, y, height, width, color);
    this.onLog = onLog;
  }

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }



  reset() {
    this.x = 286;
    this.y = 565;
  }

}