const Block = require('./Block');
const Car = require('./Car')

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(70, 100, 10, 10, 'red', 'black'),
      new Block(300, 100, 10, 10, 'red', 'black'),
      new Block(700, 100, 10, 10, 'red', 'black'),
      new Block(0, 200, 10, 10, 'green', 'black'),
      new Block(200, 200, 10, 10, 'green', 'black'),
      new Block(500, 200, 10, 10, 'green', 'black'),
      new Block(100, 300, 10, 10, 'purple', 'black'),
      new Block(300, 300, 10, 10, 'purple', 'black'),
      new Block(600, 300, 10, 10, 'purple', 'black')
    ];

    this.cars = [  
      new Car(200, 450, 10, 10, 'blue', 'black'),
      new Car(600, 450, 10, 10, 'blue', 'black'),
      new Car(0, 450, 10, 10, 'blue', 'black'),
      new Car(50, 550, 10, 10, 'blue', 'black'),
      new Car(700, 550, 10, 10, 'blue', 'black'),
      new Car(300, 550, 10, 10, 'blue', 'black'),
      new Car(10, 650, 10, 10, 'blue', 'black'), 
      new Car(600, 650, 10, 10, 'blue', 'black'), 
      new Car(110, 650, 10, 10, 'blue', 'black') 
    ];

  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      // if (block.isCollidingWithWall(canvas.width, canvas.height)) {
      //   this.endGame();  
      // } else {
      block.move();
      block.draw(this.ctx);
      if (block.x === 800){
        block.x = 0
      }
    })

    this.cars.forEach( car => {
      car.move();
      car.dx = -1;
      car.draw(this.ctx);
      if (car.x === 0){
        car.x = 800
      }
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