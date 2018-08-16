// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {

  it('should instantiate a new block', () => {
    var block = new Block();
    assert.isObject(block);
  })  
  it('should instantiate a new frog', () => {
    var frog = new Frog();
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