// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game.js');
const Block = require('../lib/Block.js');
const Frog = require('../lib/Frog.js');
const Car = require('../lib/Car.js');



const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {

  it('should instantiate a new game', () => {
    let game = new Game();
    assert.isObject(game);
  })
  it('should create a new blocks array', () => {
    let blocks = [];
    assert.isArray(blocks);
  }) 
  it('should instantiate a new block inside the canvas', () => {
    let block = new Block(70, 100, 10, 10, 'red', 1, 1, 'black')
    assert.deepEqual(block, {
      x: 70,
      y: 100,
      dx: 1,
      dxv: 1,
      dy: 0,
      dyv: 1,
      height: 10,
      width: 10,
      color: 'red',
      borderColor: 'black'
    })
  })
  it('should create a new cars array', () => {
    let cars = [];
    assert.isArray(cars);
  }) 
  it('should instantiate a new car inside the canvas', () => {
    let car = new Car(70, 100, 10, 10, 'red', 1, 1, 'black')
    assert.deepEqual(car, {
      x: 70,
      y: 100,
      dx: 1,
      dxv: 1,
      dy: 0,
      dyv: 1,
      height: 10,
      width: 10,
      color: 'red',
      borderColor: 'black'
    })
  })
  it('should instantiate a new frog', () => {
    let frog = new Frog();
    assert.isObject(frog);
  })
  it ('should move a block in a direction', () => {
    let block = new Block(70, 100, 10, 10, 1, 1, 'red', 'black')
    block.move()
    assert.isTrue(block.x !== 70) 
    assert.isTrue(block.dx === 1)
  })   
  it ('should move a car in a direction', () => {
    let car = new Car(70, 100, 10, 10, 1, 1, 'red', 'black')
    car.move()
    assert.isTrue(car.x !== 70) 
    assert.isTrue(car.dx === 1)
  }) 

 // it('should end game', () => {})
 // isOver()
 // togglePause

 it ('should move right when right arrow is pressed', () => {
    let game = new Game();
    let frog = new Frog(10);
    let event = { 
      keyCode: 39
    };
    game.handleKeyPress(event)
    assert.equal(frog.x + 30, 40)
 })
 it ('should move left when left arrow is pressed', () => {
    let game = new Game();
    let frog = new Frog(100);
    let event = { 
      keyCode: 37
    };
    game.handleKeyPress(event)
    assert.equal(frog.x - 30, 70)
 })
 it ('should move up when up arrow is pressed', () => {
    let game = new Game();
    let frog = new Frog(10, 100);
    let event = { 
      keyCode: 38
    };
    game.handleKeyPress(event)
    assert.equal(frog.y + 30, 130)
 })
 it ('should move down when down arrow is pressed', () => {
    let game = new Game();
    let frog = new Frog(10, 100);
    let event = { 
      keyCode: 40
    };
    game.handleKeyPress(event)
    assert.equal(frog.y - 30, 70)
 })






  // it('should take properties', () => {})
 
  // it('should collide with walls', () => {})
  // it('should be able to move', () => {})
  // it('should be able to changeDirection', () => {})
})