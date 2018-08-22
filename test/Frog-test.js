const { assert } = require('chai');
const Frog = require('../lib/Frog.js')

describe ('Frog', () => {

  it('should take properties', () => {
    let frog = new Frog(10, 10, 20, 20, 'lime', false, 1, 1, 1, 1)
    frog.dx = 1;
    frog.dxv = 1;

    assert.deepEqual(frog, {
      x: 10,
      y: 10,
      height: 20,
      width: 20,
      color: 'lime',
      onLog: false,
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    })
  })
  
  it('should move the frog to starting point at reset', () => {
    let frog = new Frog(10, 10, 20, 20, 'lime', false, 1, 1, 1, 1)
    frog.reset()
    assert.equal(frog.x, 286)
    assert.equal(frog.y, 565)
  })
})