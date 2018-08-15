const GamePiece = require('./GamePiece');


// extend the gamepiece class to make car
module.exports = class Car extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    super(x, y, height, width, color);
    

    this.borderColor = borderColor;
        console.log('carTest')
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);

  }
}