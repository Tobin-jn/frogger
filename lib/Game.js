const Block = require('./Block');
const Car = require('./Car')
const Frog = require('./Frog');


module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.blocks = [
      new Block(37, 65, 35, 100, 'red', 1, 1, 'black'),
      new Block(212, 65, 35, 100, 'red', 1, 1, 'black'),
      new Block(387, 65, 35, 100, 'red', 1, 1, 'black'),

      new Block(0, 125, 27, 50, 'purple', -1, 1, 'black'),
      new Block(130, 125, 27, 50, 'purple', -1, 1, 'black'),
      new Block(260, 125, 27, 50, 'purple', -1, 1, 'black'),
      new Block(390, 125, 27, 50, 'purple', -1, 1, 'black'),
      new Block(520, 125, 27, 50, 'purple', -1, 1, 'black'),

      new Block(20, 169, 35, 150, 'red', 1, 2, 'black'), 
      new Block(430, 169, 35, 150, 'red', 1, 2, 'black'), 

      new Block(37, 213, 35, 80, 'orange', 1, 1, 'black'),
      new Block(212, 213, 35, 80, 'orange', 1, 1, 'black'),
      new Block(387, 213, 35, 80, 'orange', 1, 1, 'black'),

      new Block(72, 257, 27, 60, 'red', -1, 1, 'black'),
      new Block(204, 257, 27, 60, 'red', -1, 1, 'black'),
      new Block(336, 257, 27, 60, 'red', -1, 1, 'black'),
      new Block(448, 257, 27, 60, 'red', -1, 1, 'black'),

    ];

    this.cars = [  
      new Car(100, 345, 40, 60, 'blue', -1, 1, 'black'),
      new Car(400, 345, 40, 60, 'blue', -1, 1, 'black'),

      new Car(400, 389, 27, 30, 'orange', 1, 2, 'black'),

      new Car(37, 433, 27, 30, 'blue', -1, 1, 'black'),
      new Car(212, 433, 27, 30, 'blue', -1, 1, 'black'),
      new Car(387, 433, 27, 30, 'blue', -1, 1, 'black'),

      new Car(70, 477, 27, 30, 'green', 1, 1, 'black'),
      new Car(220, 477, 27, 30, 'green', 1, 1, 'black'),
      new Car(370, 477, 27, 30, 'green', 1, 1, 'black'),

      new Car(60, 521, 27, 30, 'green', -1, 1, 'black'),
      new Car(210, 521, 27, 30, 'green', -1, 1, 'black'),
      new Car(360, 521, 27, 30, 'green', -1, 1, 'black'),
 
    ];

    this.frogs = new Frog(286, 565, 25, 25, 'lime');
    // console.log(this.frogs)



  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

      // if (block.isCollidingWithWall(canvas.width, canvas.height)) {
      //   this.endGame();  
      // } else {
      

    this.blocks.forEach( block => {
      block.move();
      block.draw(this.ctx);
      if (block.x === 600 && block.dx === 1){
        block.x = -150
        } else if ( block.x === -60 && block.dx === -1) {
        block.x = 600
      }
    })

    this.cars.forEach( car => {
      car.move();
      car.draw(this.ctx);
      if (car.x === 600 && car.dx === 1){
        car.x = 0
        } else if ( car.x === -60 && car.dx === -1) {
        car.x = 600
      }
    })

    this.blocks.forEach( block => {
      if (block.x < this.frogs.x + this.frogs.width && 
      block.x + block.width > this.frogs.x &&
      block.y < this.frogs.y + this.frogs.height &&
      block.y + block.height > this.frogs.y) {
        console.log('lose')
      }
      })

    this.cars.forEach( car => {
      if (car.x < this.frogs.x + this.frogs.width && 
      car.x + car.width > this.frogs.x &&
      car.y < this.frogs.y + this.frogs.height &&
      car.y + car.height > this.frogs.y) {
        console.log('hit')
      }
      })

 


    this.frogs.draw(this.ctx);

      if (this.frogs.isCollidingWithWall(canvas.width, canvas.height)) {
          console.log('done!');
          this.frogs.reset();
          this.frogs.draw(this.ctx);  
      }
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
      this.frogs.x += 44;

    } else if (e.key === 'ArrowLeft') {
      this.frogs.x -= 44;

    } else if (e.key === 'ArrowDown') {
      this.frogs.y += 44;

    } else if (e.key === 'ArrowUp') {
      this.frogs.y -= 44;
    } 

  }

}