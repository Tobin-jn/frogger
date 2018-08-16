const Block = require('./Block');
const Car = require('./Car')
const Frog = require('./Frog');


module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.blocks = [
      new Block(70, 100, 10, 10, 'red', 'black'),
      new Block(300, 100, 10, 10, 'red', 'black'),
      new Block(700, 100, 10, 10, 'red', 'black'),
      new Block(0, 200, 10, 10, 'purple', 'black'),
      new Block(200, 200, 10, 10, 'purple', 'black'),
      new Block(500, 200, 10, 10, 'purple', 'black'),
      new Block(100, 300, 10, 10, 'red', 'black'),
      new Block(300, 300, 10, 10, 'red', 'black'),
      new Block(600, 300, 10, 10, 'red', 'black')
    ];

    this.cars = [  
      new Car(200, 450, 10, 10, 'blue', 'black'),
      new Car(600, 450, 10, 10, 'blue', 'black'),
      new Car(0, 450, 10, 10, 'blue', 'black'),
      new Car(50, 550, 10, 10, 'green', 'black'),
      new Car(700, 550, 10, 10, 'green', 'black'),
      new Car(300, 550, 10, 10, 'green', 'black'),
      new Car(10, 650, 10, 10, 'blue', 'black'), 
      new Car(600, 650, 10, 10, 'blue', 'black'), 
      new Car(110, 650, 10, 10, 'blue', 'black') 
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

      // this.frogs.forEach( frog => {
      //   // frog.move();
      //   frog.draw(this.ctx);
      // })
      

    this.blocks.forEach( block => {
      block.move();
      block.dx = 1;

      block.draw(this.ctx);
      
      if (block.color === "purple"){
        block.dx = -1;
        }

      if (block.x === 800 && block.dx === 1){
        block.x = 0
        } else if ( block.x === 0 && block.dx === -1) {
        block.x = 800
        }
    })

    this.cars.forEach( car => {
      car.move();
      car.dx = 1;
      car.draw(this.ctx);
      if (car.color === "blue"){
        car.dx = -1;
        }

      if (car.x === 800 && car.dx === 1){
        car.x = 0
        } else if ( car.x === 0 && car.dx === -1) {
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