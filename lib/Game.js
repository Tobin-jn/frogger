const Block = require('./Block');
const Car = require('./Car')
const Frog = require('./Frog');


module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.blocks = [
      new Block(37, 65, 35, 100, 'red', 1, 'black'),
      new Block(212, 65, 35, 100, 'red', 1, 'black'),
      new Block(387, 65, 35, 100, 'red', 1, 'black'),

      new Block(0, 112, 27, 50, 'purple', -1, 'black'),
      new Block(130, 112, 27, 50, 'purple', -1, 'black'),
      new Block(260, 112, 27, 50, 'purple', -1, 'black'),
      new Block(390, 112, 27, 50, 'purple', -1, 'black'),
      new Block(520, 112, 27, 50, 'purple', -1, 'black'),

      new Block(20, 149, 35, 150, 'red', 1, 'black'), 
      new Block(430, 149, 35, 150, 'red', 1, 'black'), 

      new Block(37, 196, 35, 80, 'red', 1, 'black'),
      new Block(212, 196, 35, 80, 'red', 1, 'black'),
      new Block(387, 196, 35, 80, 'red', 1, 'black'),

      new Block(72, 243, 27, 60, 'red', -1, 'black'),
      new Block(204, 243, 27, 60, 'red', -1, 'black'),
      new Block(336, 243, 27, 60, 'red', -1, 'black'),
      new Block(448, 243, 27, 60, 'red', -1, 'black'),

    ];

    this.cars = [  
      new Car(100, 330, 40, 60, 'blue', -1, 'black'),
      new Car(400, 330, 40, 60, 'blue', -1, 'black'),

      new Car(400, 380, 27, 30, 'blue', 1, 'black'),

      new Car(37, 420, 27, 30, 'blue', -1, 'black'),
      new Car(212, 420, 27, 30, 'blue', -1, 'black'),
      new Car(387, 420, 27, 30, 'blue', -1, 'black'),

      new Car(70, 460, 27, 30, 'green', 1, 'black'),
      new Car(220, 460, 27, 30, 'green', 1, 'black'),
      new Car(370, 460, 27, 30, 'green', 1, 'black'),

      new Car(60, 500, 27, 30, 'green', -1, 'black'),
      new Car(210, 500, 27, 30, 'green', -1, 'black'),
      new Car(360, 500, 27, 30, 'green', -1, 'black'),
 
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
        block.x = -150
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