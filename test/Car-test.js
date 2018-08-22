const { assert } = require('chai');
const Car = require('../lib/Car.js');

describe('Car', () => {
  it('should take properties', () => {
    let car = new Car(10, 10, 20, 20, 'red', 1, 1, 'black', 1, 1)
    car.dx = 1;
    car.dxv = 1;

    assert.deepEqual(car, {
      x: 10,
      y: 10,
      height: 20,
      width: 20,
      color: 'red',
      dx: 1,
      dy: 0,
      borderColor: 'black',
      dxv: 1,
      dyv: 1
    })
  })
})

