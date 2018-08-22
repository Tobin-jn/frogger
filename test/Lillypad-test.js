const { assert } = require('chai');
const Lillypad = require('../lib/Lillypad.js');

describe('Lillypad', () => {
  it('should take properties', () => {
    let lillypad = new Lillypad(10, 10, 20, 20, 'lime', 1, 1, 1, 1)
    lillypad.dx = 1;
    lillypad.dxv = 1;

    assert.deepEqual(lillypad, {
      x: 10,
      y: 10,
      height: 20,
      width: 20,
      color: 'lime',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    })
  })
})