const Block = require('./Block');
const Car = require('./Car')

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(50, 300, 10, 10, 'red', 'black'),
      new Block(50, 400, 10, 10, 'green', 'black'),
      new Block(50, 500, 10, 10, 'purple', 'black')
    ];

    this.cars = [  
      new Car(10, 10, 10, 10, 'blue', 'black') 
    ];

  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();  
      } else {
        block.move();
      }
      block.draw(this.ctx);
    })

    this.cars.forEach( car => {
      car.move();
      car.draw(this.ctx);
      if (car.x === 800){
        car.x = 0}
      })
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

}