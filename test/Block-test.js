const { assert } = require('chai');
const Block = require('../lib/Block.js');

describe('Block', () => {
  it('should take properties', () => {
    let block = new Block(10, 10, 20, 20, 'blue', 1, 1, 'black', 1, 1)
    block.dx = 1;
    block.dxv = 1;

    assert.deepEqual(block, {
      x: 10,
      y: 10,
      height: 20,
      width: 20,
      color: 'blue',
      dx: 1,
      dy: 0,
      borderColor: 'black',
      dxv: 1,
      dyv: 1
    })
  })
})