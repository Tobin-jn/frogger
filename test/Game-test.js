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

  // it('should instantiate a new blocks array', () => {
  //   var block = [];
  //   assert.isArray(block);
  // })  

  it('should instantiate a new game', () => {
    let game = new Game();
    assert.isObject(game);
  })
  it('should create a new blocks array', () => {
    let blocks = [];
    assert.isArray(blocks);
  }) 
  it('should instantiate a new block inside the canvas', () => {
    let block = new Block(70, 100, 10, 10, 'red', 'black')
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
    let car = new Car(70, 100, 10, 10, 'red', 'black')
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









  //should instantiate new car
  //should instantiate new frog
  // it('should take properties', () => {})
  // it('should end game', () => {})
  // it('should collide with walls', () => {})
  // it('should be able to move', () => {})
  // it('should be able to changeDirection', () => {})
})