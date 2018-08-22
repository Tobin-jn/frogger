const GamePiece = require('./GamePiece');

module.exports = class Lillypad extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
  }

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    super.draw(ctx);
  }
}
