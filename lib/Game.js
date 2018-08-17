const Block = require('./Block');
const Car = require('./Car')
const Frog = require('./Frog');


module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.blocks = [
      new Block(37, 65, 40, 100, 'red', 1, 'black'),
      new Block(212, 65, 40, 100, 'red', 1, 'black'),
      new Block(387, 65, 40, 100, 'red', 1, 'black'),

      new Block(0, 112, 30, 50, 'purple', -1, 'black'),
      new Block(130, 112, 30, 50, 'purple', -1, 'black'),
      new Block(260, 112, 30, 50, 'purple', -1, 'black'),
      new Block(390, 112, 30, 50, 'purple', -1, 'black'),

      new Block(40, 149, 40, 75, 'red', 1, 'black'), 

      new Block(37, 196, 40, 80, 'red', 1, 'black'),
      new Block(212, 196, 40, 80, 'red', 1, 'black'),
      new Block(387, 196, 40, 80, 'red', 1, 'black'),

      new Block(400, 243, 30, 60, 'red', -1, 'black'),

    ];

    this.cars = [  
      new Car(400, 330, 40, 60, 'blue', -1, 'black'),

      new Car(400, 380, 30, 30, 'blue', 1, 'black'),

      new Car(400, 420, 30, 30, 'blue', -1, 'black'),

      new Car(40, 460, 30, 30, 'green', 1, 'black'),

      new Car(400, 500, 30, 30, 'green', -1, 'black'),
 
    ];

    this.frogs = new Frog(250, 450, 25, 25, 'lime');
    console.log(this.frogs)



  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

      // if (block.isCollidingWithWall(canvas.width, canvas.height)) {
      //   this.endGame();  
      // } else {
    this.frogs.draw(this.ctx);
      

    this.blocks.forEach( block => {
      block.move();
      block.draw(this.ctx);
      if (block.x === 600 && block.dx === 1){
        block.x = 0
        } else if ( block.x === 0 && block.dx === -1) {
        block.x = 600
      }
    })

    this.cars.forEach( car => {
      car.move();
      car.draw(this.ctx);
      if (car.x === 600 && car.dx === 1){
        car.x = 0
        } else if ( car.x === 0 && car.dx === -1) {
        car.x = 600
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

    if (e.key === 'ArrowRight') {
      this.frogs.x += 30;

    } else if (e.key === 'ArrowLeft') {
      this.frogs.x -= 30;

    } else if (e.key === 'ArrowDown') {
      this.frogs.y += 30;

    } else if (e.key === 'ArrowUp') {
      this.frogs.y -= 30;
    } 

  }

}