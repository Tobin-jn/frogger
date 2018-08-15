const GamePiece = require('./GamePiece');


// extend the gamepiece class to make car
module.exports = class Car extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
  }

  draw(ctx) {
    const {x, y, height, width } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    // ctx.strokeStyle = borderColor;
    // ctx.strokeRect(x, y, width, height);
  }
}