// GamePiece-test.js
const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', () => {
  it('should take properties', () => {
    let gamepiece = new GamePiece(30, 30, 10, 10, 'green', 1, 1, 0, 1);

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

  it('should collide with a second gamepiece that occupies the same space', () => {
    let gamepiece = new GamePiece(30, 30, 10, 10, 'green', 1, 1, 0, 1);
    let object = {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
    }
    assert.isTrue(gamepiece.isCollidingWith(object), true)
  })

  it('should collide with walls', () => {
    let gamepiece = new GamePiece(-10, -10, 10, 10, 'green', 1, 1, 0, 1);
    assert.isTrue(gamepiece.isCollidingWithWall(100, 100), true)
  })

  it('should be able to move', () => {
    let gamepiece = new GamePiece(10, 10, 10, 10, 'green', 1, 1, 0, 1);
    gamepiece.move()
    assert.isTrue(gamepiece.x !== 10)
  })
})
