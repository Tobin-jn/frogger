// GamePiece-test.js
const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', () => {
  it('should take properties', () => {
    // Assertion
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    })
  })
  // it('should collide with a second gamepiece that occupies the same space', () => {})
  // it('should collide with walls', () => {})
  // it('should be able to move', () => {})
  // it('should be able to changeDirection', () => {})
})
