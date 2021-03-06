const Block = require('./Block');
const Car = require('./Car');
const Frog = require('./Frog');
const Lillypad = require('./Lillypad');


module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.level = 1;
    this.lives = 3;
    this.blocks = [
      new Block(37, 75, 35, 100, 'red', 1, 1, 'black'),
      new Block(212, 75, 35, 100, 'red', 1, 1, 'black'),
      new Block(387, 75, 35, 100, 'red', 1, 1, 'black'),

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


    this.lillypads = [
      new Lillypad(20, 35, 30, 30, 'transparent'),
      new Lillypad(150, 35, 30, 30, 'transparent'),
      new Lillypad(281, 35, 30, 30, 'transparent'),
      new Lillypad(413, 35, 30, 30, 'transparent'),
      new Lillypad(545, 35, 30, 30, 'transparent')
    ]; 

    this.frogs = new Frog(286, 565, 25, 25, 'lime', false);
  }

  animate() {
    const { canvas } = this.ctx;

    this.loopBlocks();
    this.loopCars();
    this.killFrog();
    this.moveFrogOnLog();
    this.drawLillyPads();
    this.frogOnLillypad();
    this.moveToNextLevel();
    this.waterDeath();
    this.frogs.draw(this.ctx);
    if (this.frogs.isCollidingWithWall(canvas.width, canvas.height)) {
      this.lives--;
      this.frogs.reset();
      this.frogs.draw(this.ctx); 
      this.score = 0; 
    }
  }
  
  endGame() {
    this.gameOver = true;
  }

  loopCars() {
    this.cars.forEach( car => {
      car.move();
      car.draw(this.ctx);
      if (car.x >= 600 && car.dx === 1) {
        car.x = 0;
      } else if ( car.x <= -60 && car.dx === -1) {
        car.x = 600;
      }
    });
  }


  moveToNextLevel() {
    this.lillypads.forEach( lillypad => {
      if (lillypad.color === 'lime' && this.score >= 1100) {
        this.addLvl();
        lillypad.color = 'transparent';
      }
    });
  }

  waterDeath() {
    this.blocks.forEach( block => {
      if (this.frogs.onLog === false && this.frogs.y < 260) {
        this.frogs.reset();
        this.lives--;
      }
    });
  }

  clearLillyPads() {
    this.lillypads.forEach( lillypad => {
      lillypad.color = 'transparent';
    });
  }


  frogOnLillypad() {
    this.lillypads.forEach( lillypad => {
      if (lillypad.isCollidingWith(this.frogs)) {
        lillypad.color = 'lime';
        this.score += 100;
        this.frogs.reset();
      } 
    });
  }

  moveFrogOnLog() {
    this.blocks.forEach( block => {
      if (block.isCollidingWith(this.frogs)) {
        this.frogs.dx = block.dx;
        this.frogs.dxv = block.dxv;
        this.frogs.move();
        this.frogs.onLog = true;
      } 
    });
  }

  drawLillyPads() {
    this.lillypads.forEach( lillypad => {
      lillypad.draw(this.ctx);
    });
  }

  killFrog() {
    this.cars.forEach( car => {
      if (car.isCollidingWith(this.frogs)) {
        this.frogs.reset();
        this.lives--;
      }
    });
  }

  loopBlocks() { 
    this.blocks.forEach( block => {
      this.frogs.onLog = false;
      block.move();
      block.draw(this.ctx);
      if (block.x >= 600 && block.dx === 1) {
        block.x = -150;
      } else if ( block.x <= -60 && block.dx === -1) {
        block.x = 600;
      }
    });
  }


  isOver() {
    return this.gameOver;
  }


  loseLives() {
    return this.lives;
  }

  addLvl() {
    this.level = 2;
    this.cars.forEach( car => {
      car.dxv = 2;
    });
    this.blocks.forEach( block => {
      block.dxv = 2;
    });
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
      this.score += 10;

    }  else if (e.key === 'p') {
      this.paused = !this.paused;
    }
    e.preventDefault();
  }

};