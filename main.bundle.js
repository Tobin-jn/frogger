/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Block, _GamePiece);

  function Block(x, y, height, width, color, dx, dxv, borderColor) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, x, y, height, width, color, dx, dxv));

    _this.borderColor = borderColor;
    return _this;
  }

  _createClass(Block, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color,
          dx = this.dx,
          dxv = this.dxv,
          borderColor = this.borderColor;


      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'draw', this).call(this, ctx);

      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }]);

  return Block;
}(GamePiece);

/***/ }),

/***/ "./lib/Car.js":
/*!********************!*\
  !*** ./lib/Car.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Car, _GamePiece);

  function Car(x, y, height, width, color, dx, dxv, borderColor) {
    _classCallCheck(this, Car);

    var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, x, y, height, width, color, dx, dxv));

    _this.borderColor = borderColor;
    return _this;
  }

  _createClass(Car, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color,
          dx = this.dx,
          dxv = this.dxv,
          borderColor = this.borderColor;


      _get(Car.prototype.__proto__ || Object.getPrototypeOf(Car.prototype), 'draw', this).call(this, ctx);

      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }]);

  return Car;
}(GamePiece);

/***/ }),

/***/ "./lib/Frog.js":
/*!*********************!*\
  !*** ./lib/Frog.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Frog, _GamePiece);

  function Frog(x, y, height, width, color, onLog) {
    _classCallCheck(this, Frog);

    var _this = _possibleConstructorReturn(this, (Frog.__proto__ || Object.getPrototypeOf(Frog)).call(this, x, y, height, width, color));

    _this.onLog = onLog;
    return _this;
  }

  _createClass(Frog, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;

      // call parent class draw function

      _get(Frog.prototype.__proto__ || Object.getPrototypeOf(Frog.prototype), 'draw', this).call(this, ctx);

      // draw block border
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.x = 286;
      this.y = 565;
    }
  }]);

  return Frog;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = __webpack_require__(/*! ./Block */ "./lib/Block.js");
var Car = __webpack_require__(/*! ./Car */ "./lib/Car.js");
var Frog = __webpack_require__(/*! ./Frog */ "./lib/Frog.js");
var Lillypad = __webpack_require__(/*! ./Lillypad */ "./lib/Lillypad.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.level = 1;
    this.lives = 3;
    this.blocks = [new Block(37, 75, 35, 100, 'red', 1, 1, 'black'), new Block(212, 75, 35, 100, 'red', 1, 1, 'black'), new Block(387, 75, 35, 100, 'red', 1, 1, 'black'), new Block(0, 125, 27, 50, 'purple', -1, 1, 'black'), new Block(130, 125, 27, 50, 'purple', -1, 1, 'black'), new Block(260, 125, 27, 50, 'purple', -1, 1, 'black'), new Block(390, 125, 27, 50, 'purple', -1, 1, 'black'), new Block(520, 125, 27, 50, 'purple', -1, 1, 'black'), new Block(20, 169, 35, 150, 'red', 1, 2, 'black'), new Block(430, 169, 35, 150, 'red', 1, 2, 'black'), new Block(37, 213, 35, 80, 'orange', 1, 1, 'black'), new Block(212, 213, 35, 80, 'orange', 1, 1, 'black'), new Block(387, 213, 35, 80, 'orange', 1, 1, 'black'), new Block(72, 257, 27, 60, 'red', -1, 1, 'black'), new Block(204, 257, 27, 60, 'red', -1, 1, 'black'), new Block(336, 257, 27, 60, 'red', -1, 1, 'black'), new Block(448, 257, 27, 60, 'red', -1, 1, 'black')];

    this.cars = [new Car(100, 345, 40, 60, 'blue', -1, 1, 'black'), new Car(400, 345, 40, 60, 'blue', -1, 1, 'black'), new Car(400, 389, 27, 30, 'orange', 1, 2, 'black'), new Car(37, 433, 27, 30, 'blue', -1, 1, 'black'), new Car(212, 433, 27, 30, 'blue', -1, 1, 'black'), new Car(387, 433, 27, 30, 'blue', -1, 1, 'black'), new Car(70, 477, 27, 30, 'green', 1, 1, 'black'), new Car(220, 477, 27, 30, 'green', 1, 1, 'black'), new Car(370, 477, 27, 30, 'green', 1, 1, 'black'), new Car(60, 521, 27, 30, 'green', -1, 1, 'black'), new Car(210, 521, 27, 30, 'green', -1, 1, 'black'), new Car(360, 521, 27, 30, 'green', -1, 1, 'black')];

    this.lillypads = [new Lillypad(20, 35, 30, 30, 'transparent'), new Lillypad(150, 35, 30, 30, 'transparent'), new Lillypad(281, 35, 30, 30, 'transparent'), new Lillypad(413, 35, 30, 30, 'transparent'), new Lillypad(545, 35, 30, 30, 'transparent')];

    this.frogs = new Frog(286, 565, 25, 25, 'lime', false);
  }

  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var canvas = this.ctx.canvas;


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
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
    }
  }, {
    key: 'loopCars',
    value: function loopCars() {
      var _this = this;

      this.cars.forEach(function (car) {
        car.move();
        car.draw(_this.ctx);
        if (car.x >= 600 && car.dx === 1) {
          car.x = 0;
        } else if (car.x <= -60 && car.dx === -1) {
          car.x = 600;
        }
      });
    }
  }, {
    key: 'moveToNextLevel',
    value: function moveToNextLevel() {
      var _this2 = this;

      this.lillypads.forEach(function (lillypad) {
        if (lillypad.color === 'lime' && _this2.score >= 1100) {
          _this2.addLvl();
          lillypad.color = 'transparent';
        }
      });
    }
  }, {
    key: 'waterDeath',
    value: function waterDeath() {
      var _this3 = this;

      this.blocks.forEach(function (block) {
        if (_this3.frogs.onLog === false && _this3.frogs.y < 260) {
          _this3.frogs.reset();
          _this3.lives--;
        }
      });
    }
  }, {
    key: 'clearLillyPads',
    value: function clearLillyPads() {
      this.lillypads.forEach(function (lillypad) {
        lillypad.color = 'transparent';
      });
    }
  }, {
    key: 'frogOnLillypad',
    value: function frogOnLillypad() {
      var _this4 = this;

      this.lillypads.forEach(function (lillypad) {
        if (lillypad.isCollidingWith(_this4.frogs)) {
          lillypad.color = 'lime';
          _this4.score += 100;
          _this4.frogs.reset();
        }
      });
    }
  }, {
    key: 'moveFrogOnLog',
    value: function moveFrogOnLog() {
      var _this5 = this;

      this.blocks.forEach(function (block) {
        if (block.isCollidingWith(_this5.frogs)) {
          _this5.frogs.dx = block.dx;
          _this5.frogs.dxv = block.dxv;
          _this5.frogs.move();
          _this5.frogs.onLog = true;
        }
      });
    }
  }, {
    key: 'drawLillyPads',
    value: function drawLillyPads() {
      var _this6 = this;

      this.lillypads.forEach(function (lillypad) {
        lillypad.draw(_this6.ctx);
      });
    }
  }, {
    key: 'killFrog',
    value: function killFrog() {
      var _this7 = this;

      this.cars.forEach(function (car) {
        if (car.isCollidingWith(_this7.frogs)) {
          _this7.frogs.reset();
          _this7.lives--;
        }
      });
    }
  }, {
    key: 'loopBlocks',
    value: function loopBlocks() {
      var _this8 = this;

      this.blocks.forEach(function (block) {
        _this8.frogs.onLog = false;
        block.move();
        block.draw(_this8.ctx);
        if (block.x >= 600 && block.dx === 1) {
          block.x = -150;
        } else if (block.x <= -60 && block.dx === -1) {
          block.x = 600;
        }
      });
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'loseLives',
    value: function loseLives() {
      return this.lives;
    }
  }, {
    key: 'addLvl',
    value: function addLvl() {
      this.level = 2;
      this.cars.forEach(function (car) {
        car.dxv = 2;
      });
      this.blocks.forEach(function (block) {
        block.dxv = 2;
      });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {

      if (e.key === 'ArrowRight') {
        this.frogs.x += 44;
      } else if (e.key === 'ArrowLeft') {
        this.frogs.x -= 44;
      } else if (e.key === 'ArrowDown') {
        this.frogs.y += 44;
      } else if (e.key === 'ArrowUp') {
        this.frogs.y -= 44;
        this.score += 10;
      } else if (e.key === 'p') {
        this.paused = !this.paused;
      }
      e.preventDefault();
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color, dx, dxv) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = 1;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }
  }, {
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;

      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Lillypad.js":
/*!*************************!*\
  !*** ./lib/Lillypad.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Lillypad, _GamePiece);

  function Lillypad(x, y, height, width, color) {
    _classCallCheck(this, Lillypad);

    return _possibleConstructorReturn(this, (Lillypad.__proto__ || Object.getPrototypeOf(Lillypad)).call(this, x, y, height, width, color));
  }

  _createClass(Lillypad, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;


      _get(Lillypad.prototype.__proto__ || Object.getPrototypeOf(Lillypad.prototype), 'draw', this).call(this, ctx);
    }
  }]);

  return Lillypad;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");
var Frog = __webpack_require__(/*! ./Frog */ "./lib/Frog.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

var newGame = document.querySelector('.button');

window.requestAnimationFrame(gameLoop);

function gameLoop() {

  if (game.isOver()) {
    ctx.font = "100px Arial";
    ctx.fillText("Game Over", 30, 300);
    ctx.fillStyle = 'green';
  } else if (game.paused === true) {
    ctx.font = "100px Arial";
    ctx.fillText("Paused", 140, 300);
    ctx.fillStyle = 'green';
  } else if (game.paused === true) {
    console.log('paused');
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.animate();

    var lives = game.loseLives();
    document.querySelector('.lives').innerText = lives;
    if (lives === 0) {
      game.endGame();
    }

    var gameLevel = game.level;
    document.querySelector('.level').innerText = gameLevel;
  }

  window.requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', keepScore);
newGame.addEventListener('click', restartGame);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function addLevel() {
  var gameLevel = game.level;
  document.querySelector('.level').innerText = gameLevel;
}

function keepScore() {
  var gameScore = game.score;
  document.querySelector('.score').innerText = gameScore;
}

function restartGame() {
  game.gameOver = false;
  game.score = 0;
  game.level = 1;
  game.lives = 3;
  game.frogs.reset();
  game.dxv = 1;
  game.clearLillyPads();
  keepScore();
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9DYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zyb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTGlsbHlwYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZHgiLCJkeHYiLCJib3JkZXJDb2xvciIsImN0eCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsIm9uTG9nIiwiQmxvY2siLCJDYXIiLCJGcm9nIiwiTGlsbHlwYWQiLCJwYXVzZWQiLCJnYW1lT3ZlciIsInNjb3JlIiwibGV2ZWwiLCJsaXZlcyIsImJsb2NrcyIsImNhcnMiLCJsaWxseXBhZHMiLCJmcm9ncyIsImNhbnZhcyIsImxvb3BCbG9ja3MiLCJsb29wQ2FycyIsImtpbGxGcm9nIiwibW92ZUZyb2dPbkxvZyIsImRyYXdMaWxseVBhZHMiLCJmcm9nT25MaWxseXBhZCIsIm1vdmVUb05leHRMZXZlbCIsIndhdGVyRGVhdGgiLCJkcmF3IiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsInJlc2V0IiwiZm9yRWFjaCIsImNhciIsIm1vdmUiLCJsaWxseXBhZCIsImFkZEx2bCIsImlzQ29sbGlkaW5nV2l0aCIsImJsb2NrIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiZHkiLCJkeXYiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwibmV3R2FtZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVMb29wIiwiaXNPdmVyIiwiZm9udCIsImZpbGxUZXh0IiwiY29uc29sZSIsImxvZyIsImNsZWFyUmVjdCIsImFuaW1hdGUiLCJsb3NlTGl2ZXMiLCJpbm5lclRleHQiLCJlbmRHYW1lIiwiZ2FtZUxldmVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleVByZXNzIiwia2VlcFNjb3JlIiwicmVzdGFydEdhbWUiLCJhZGRMZXZlbCIsImdhbWVTY29yZSIsImNsZWFyTGlsbHlQYWRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLFlBQVksbUJBQUFDLENBQVEsdUNBQVIsQ0FBbEI7O0FBRUFDLE9BQU9DLE9BQVA7QUFBQTs7QUFDRSxpQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIs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QVlmLEtBQUt2QyxLQUFyQjtBQUNBb0MsV0FBU0MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ2UsU0FBakMsR0FBNkNFLFNBQTdDO0FBQ0Q7O0FBRUQsU0FBU0csU0FBVCxHQUFxQjtBQUNuQixNQUFJRyxZQUFZckIsS0FBS3hDLEtBQXJCO0FBQ0FxQyxXQUFTQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDZSxTQUFqQyxHQUE2Q1EsU0FBN0M7QUFDRDs7QUFFRCxTQUFTRixXQUFULEdBQXVCO0FBQ25CbkIsT0FBS3pDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQXlDLE9BQUt4QyxLQUFMLEdBQWEsQ0FBYjtBQUNBd0MsT0FBS3ZDLEtBQUwsR0FBYSxDQUFiO0FBQ0F1QyxPQUFLdEMsS0FBTCxHQUFhLENBQWI7QUFDQXNDLE9BQUtsQyxLQUFMLENBQVdZLEtBQVg7QUFDQXNCLE9BQUtwRCxHQUFMLEdBQVcsQ0FBWDtBQUNBb0QsT0FBS3NCLGNBQUw7QUFDQUo7QUFDSCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJsb2NrIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4LCBkeHYsIGJvcmRlckNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4LCBkeHYpO1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgfSBcblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHt4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgsIGR4diwgYm9yZGVyQ29sb3IgfSA9IHRoaXM7XG5cbiAgICBzdXBlci5kcmF3KGN0eCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcbiAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufTsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENhciBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBkeCwgZHh2LCBib3JkZXJDb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBkeCwgZHh2KTtcbiAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XG4gIH0gXG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7eCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4LCBkeHYsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxufSIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGcm9nIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIG9uTG9nKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICAgIHRoaXMub25Mb2cgPSBvbkxvZztcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3Qge3gsIHksIGhlaWdodCwgd2lkdGgsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXG4gICAgLy8gY2FsbCBwYXJlbnQgY2xhc3MgZHJhdyBmdW5jdGlvblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcblxuICAgIC8vIGRyYXcgYmxvY2sgYm9yZGVyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuXG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy54ID0gMjg2O1xuICAgIHRoaXMueSA9IDU2NTtcbiAgfVxuXG59IiwiY29uc3QgQmxvY2sgPSByZXF1aXJlKCcuL0Jsb2NrJyk7XG5jb25zdCBDYXIgPSByZXF1aXJlKCcuL0NhcicpO1xuY29uc3QgRnJvZyA9IHJlcXVpcmUoJy4vRnJvZycpO1xuY29uc3QgTGlsbHlwYWQgPSByZXF1aXJlKCcuL0xpbGx5cGFkJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5ibG9ja3MgPSBbXG4gICAgICBuZXcgQmxvY2soMzcsIDc1LCAzNSwgMTAwLCAncmVkJywgMSwgMSwgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soMjEyLCA3NSwgMzUsIDEwMCwgJ3JlZCcsIDEsIDEsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDM4NywgNzUsIDM1LCAxMDAsICdyZWQnLCAxLCAxLCAnYmxhY2snKSxcblxuICAgICAgbmV3IEJsb2NrKDAsIDEyNSwgMjcsIDUwLCAncHVycGxlJywgLTEsIDEsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDEzMCwgMTI1LCAyNywgNTAsICdwdXJwbGUnLCAtMSwgMSwgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soMjYwLCAxMjUsIDI3LCA1MCwgJ3B1cnBsZScsIC0xLCAxLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jaygzOTAsIDEyNSwgMjcsIDUwLCAncHVycGxlJywgLTEsIDEsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDUyMCwgMTI1LCAyNywgNTAsICdwdXJwbGUnLCAtMSwgMSwgJ2JsYWNrJyksXG5cbiAgICAgIG5ldyBCbG9jaygyMCwgMTY5LCAzNSwgMTUwLCAncmVkJywgMSwgMiwgJ2JsYWNrJyksIFxuICAgICAgbmV3IEJsb2NrKDQzMCwgMTY5LCAzNSwgMTUwLCAncmVkJywgMSwgMiwgJ2JsYWNrJyksIFxuXG4gICAgICBuZXcgQmxvY2soMzcsIDIxMywgMzUsIDgwLCAnb3JhbmdlJywgMSwgMSwgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soMjEyLCAyMTMsIDM1LCA4MCwgJ29yYW5nZScsIDEsIDEsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDM4NywgMjEzLCAzNSwgODAsICdvcmFuZ2UnLCAxLCAxLCAnYmxhY2snKSxcblxuICAgICAgbmV3IEJsb2NrKDcyLCAyNTcsIDI3LCA2MCwgJ3JlZCcsIC0xLCAxLCAnYmxhY2snKSxcbiAgICAgIG5ldyBCbG9jaygyMDQsIDI1NywgMjcsIDYwLCAncmVkJywgLTEsIDEsICdibGFjaycpLFxuICAgICAgbmV3IEJsb2NrKDMzNiwgMjU3LCAyNywgNjAsICdyZWQnLCAtMSwgMSwgJ2JsYWNrJyksXG4gICAgICBuZXcgQmxvY2soNDQ4LCAyNTcsIDI3LCA2MCwgJ3JlZCcsIC0xLCAxLCAnYmxhY2snKSxcblxuICAgIF07XG5cbiAgICB0aGlzLmNhcnMgPSBbICBcbiAgICAgIG5ldyBDYXIoMTAwLCAzNDUsIDQwLCA2MCwgJ2JsdWUnLCAtMSwgMSwgJ2JsYWNrJyksXG4gICAgICBuZXcgQ2FyKDQwMCwgMzQ1LCA0MCwgNjAsICdibHVlJywgLTEsIDEsICdibGFjaycpLFxuXG4gICAgICBuZXcgQ2FyKDQwMCwgMzg5LCAyNywgMzAsICdvcmFuZ2UnLCAxLCAyLCAnYmxhY2snKSxcblxuICAgICAgbmV3IENhcigzNywgNDMzLCAyNywgMzAsICdibHVlJywgLTEsIDEsICdibGFjaycpLFxuICAgICAgbmV3IENhcigyMTIsIDQzMywgMjcsIDMwLCAnYmx1ZScsIC0xLCAxLCAnYmxhY2snKSxcbiAgICAgIG5ldyBDYXIoMzg3LCA0MzMsIDI3LCAzMCwgJ2JsdWUnLCAtMSwgMSwgJ2JsYWNrJyksXG5cbiAgICAgIG5ldyBDYXIoNzAsIDQ3NywgMjcsIDMwLCAnZ3JlZW4nLCAxLCAxLCAnYmxhY2snKSxcbiAgICAgIG5ldyBDYXIoMjIwLCA0NzcsIDI3LCAzMCwgJ2dyZWVuJywgMSwgMSwgJ2JsYWNrJyksXG4gICAgICBuZXcgQ2FyKDM3MCwgNDc3LCAyNywgMzAsICdncmVlbicsIDEsIDEsICdibGFjaycpLFxuXG4gICAgICBuZXcgQ2FyKDYwLCA1MjEsIDI3LCAzMCwgJ2dyZWVuJywgLTEsIDEsICdibGFjaycpLFxuICAgICAgbmV3IENhcigyMTAsIDUyMSwgMjcsIDMwLCAnZ3JlZW4nLCAtMSwgMSwgJ2JsYWNrJyksXG4gICAgICBuZXcgQ2FyKDM2MCwgNTIxLCAyNywgMzAsICdncmVlbicsIC0xLCAxLCAnYmxhY2snKSxcbiBcbiAgICBdO1xuXG5cbiAgICB0aGlzLmxpbGx5cGFkcyA9IFtcbiAgICAgIG5ldyBMaWxseXBhZCgyMCwgMzUsIDMwLCAzMCwgJ3RyYW5zcGFyZW50JyksXG4gICAgICBuZXcgTGlsbHlwYWQoMTUwLCAzNSwgMzAsIDMwLCAndHJhbnNwYXJlbnQnKSxcbiAgICAgIG5ldyBMaWxseXBhZCgyODEsIDM1LCAzMCwgMzAsICd0cmFuc3BhcmVudCcpLFxuICAgICAgbmV3IExpbGx5cGFkKDQxMywgMzUsIDMwLCAzMCwgJ3RyYW5zcGFyZW50JyksXG4gICAgICBuZXcgTGlsbHlwYWQoNTQ1LCAzNSwgMzAsIDMwLCAndHJhbnNwYXJlbnQnKVxuICAgIF07IFxuXG4gICAgdGhpcy5mcm9ncyA9IG5ldyBGcm9nKDI4NiwgNTY1LCAyNSwgMjUsICdsaW1lJywgZmFsc2UpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG5cbiAgICB0aGlzLmxvb3BCbG9ja3MoKTtcbiAgICB0aGlzLmxvb3BDYXJzKCk7XG4gICAgdGhpcy5raWxsRnJvZygpO1xuICAgIHRoaXMubW92ZUZyb2dPbkxvZygpO1xuICAgIHRoaXMuZHJhd0xpbGx5UGFkcygpO1xuICAgIHRoaXMuZnJvZ09uTGlsbHlwYWQoKTtcbiAgICB0aGlzLm1vdmVUb05leHRMZXZlbCgpO1xuICAgIHRoaXMud2F0ZXJEZWF0aCgpO1xuICAgIHRoaXMuZnJvZ3MuZHJhdyh0aGlzLmN0eCk7XG4gICAgaWYgKHRoaXMuZnJvZ3MuaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICAgICAgdGhpcy5saXZlcy0tXG4gICAgICAgICAgdGhpcy5mcm9ncy5yZXNldCgpO1xuICAgICAgICAgIHRoaXMuZnJvZ3MuZHJhdyh0aGlzLmN0eCk7IFxuICAgICAgICAgIHRoaXMuc2NvcmUgPSAwOyBcbiAgICAgIH1cblxuICAgIH1cbiAgXG5cbiAgZW5kR2FtZSgpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgfTtcblxuICBsb29wQ2FycygpIHtcbiAgICB0aGlzLmNhcnMuZm9yRWFjaCggY2FyID0+IHtcbiAgICAgIGNhci5tb3ZlKCk7XG4gICAgICBjYXIuZHJhdyh0aGlzLmN0eCk7XG4gICAgICBpZiAoY2FyLnggPj0gNjAwICYmIGNhci5keCA9PT0gMSkge1xuICAgICAgICBjYXIueCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIGNhci54IDw9IC02MCAmJiBjYXIuZHggPT09IC0xKSB7XG4gICAgICAgIGNhci54ID0gNjAwO1xuICAgICAgfVxuICAgIH0pXG4gIH07XG5cblxuICBtb3ZlVG9OZXh0TGV2ZWwoKSB7XG4gICAgdGhpcy5saWxseXBhZHMuZm9yRWFjaCggbGlsbHlwYWQgPT4ge1xuICAgICAgaWYgKGxpbGx5cGFkLmNvbG9yID09PSAnbGltZScgJiYgdGhpcy5zY29yZSA+PSAxMTAwKSB7XG4gICAgICB0aGlzLmFkZEx2bCgpO1xuICAgICAgbGlsbHlwYWQuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cbiAgICB9KVxuICB9O1xuXG4gIHdhdGVyRGVhdGgoKSB7XG4gICAgdGhpcy5ibG9ja3MuZm9yRWFjaCggYmxvY2sgPT4ge1xuICAgICAgaWYgKHRoaXMuZnJvZ3Mub25Mb2cgPT09IGZhbHNlICYmIHRoaXMuZnJvZ3MueSA8IDI2MCkge1xuICAgICAgICB0aGlzLmZyb2dzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMubGl2ZXMtLVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJMaWxseVBhZHMoKSB7XG4gICAgdGhpcy5saWxseXBhZHMuZm9yRWFjaCggbGlsbHlwYWQgPT4ge1xuICAgICAgbGlsbHlwYWQuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH0pXG4gIH1cblxuXG4gIGZyb2dPbkxpbGx5cGFkKCkge1xuICAgIHRoaXMubGlsbHlwYWRzLmZvckVhY2goIGxpbGx5cGFkID0+IHtcbiAgICAgIGlmIChsaWxseXBhZC5pc0NvbGxpZGluZ1dpdGgodGhpcy5mcm9ncykpIHtcbiAgICAgICAgbGlsbHlwYWQuY29sb3IgPSAnbGltZSc7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTAwO1xuICAgICAgICB0aGlzLmZyb2dzLnJlc2V0KCk7XG4gICAgICB9IFxuICAgIH0pXG4gIH1cblxuICBtb3ZlRnJvZ09uTG9nKCkge1xuICAgIHRoaXMuYmxvY2tzLmZvckVhY2goIGJsb2NrID0+IHtcbiAgICAgIGlmIChibG9jay5pc0NvbGxpZGluZ1dpdGgodGhpcy5mcm9ncykpIHtcbiAgICAgICAgdGhpcy5mcm9ncy5keCA9IGJsb2NrLmR4O1xuICAgICAgICB0aGlzLmZyb2dzLmR4diA9IGJsb2NrLmR4djtcbiAgICAgICAgdGhpcy5mcm9ncy5tb3ZlKCk7XG4gICAgICAgIHRoaXMuZnJvZ3Mub25Mb2cgPSB0cnVlO1xuICAgICAgfSBcbiAgICB9KVxuICB9O1xuXG4gIGRyYXdMaWxseVBhZHMoKSB7XG4gICAgdGhpcy5saWxseXBhZHMuZm9yRWFjaCggbGlsbHlwYWQgPT4ge1xuICAgICAgbGlsbHlwYWQuZHJhdyh0aGlzLmN0eCk7XG4gICAgfSk7XG4gIH07XG5cbiAga2lsbEZyb2coKSB7XG4gICAgdGhpcy5jYXJzLmZvckVhY2goIGNhciA9PiB7XG4gICAgICBpZiAoY2FyLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZyb2dzKSkge1xuICAgICAgICB0aGlzLmZyb2dzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMubGl2ZXMtLVxuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgbG9vcEJsb2NrcygpIHsgXG4gICAgdGhpcy5ibG9ja3MuZm9yRWFjaCggYmxvY2sgPT4ge1xuICAgICAgdGhpcy5mcm9ncy5vbkxvZyA9IGZhbHNlO1xuICAgICAgYmxvY2subW92ZSgpO1xuICAgICAgYmxvY2suZHJhdyh0aGlzLmN0eCk7XG4gICAgICBpZiAoYmxvY2sueCA+PSA2MDAgJiYgYmxvY2suZHggPT09IDEpIHtcbiAgICAgICAgYmxvY2sueCA9IC0xNTA7XG4gICAgICB9IGVsc2UgaWYgKCBibG9jay54IDw9IC02MCAmJiBibG9jay5keCA9PT0gLTEpIHtcbiAgICAgICAgYmxvY2sueCA9IDYwMDtcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9O1xuXG5cbiAgbG9zZUxpdmVzKCkge1xuICAgIHJldHVybiB0aGlzLmxpdmVzXG4gIH07XG5cbiAgYWRkTHZsKCkge1xuICAgIHRoaXMubGV2ZWwgPSAyO1xuICAgIHRoaXMuY2Fycy5mb3JFYWNoKCBjYXIgPT4ge1xuICAgICAgY2FyLmR4diA9IDI7XG4gICAgICB9KVxuICAgIHRoaXMuYmxvY2tzLmZvckVhY2goIGJsb2NrID0+IHtcbiAgICAgIGJsb2NrLmR4diA9IDI7XG4gICAgICB9KVxuICB9O1xuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICB0aGlzLmZyb2dzLnggKz0gNDQ7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgdGhpcy5mcm9ncy54IC09IDQ0O1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuZnJvZ3MueSArPSA0NDtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgdGhpcy5mcm9ncy55IC09IDQ0O1xuICAgICAgdGhpcy5zY29yZSArPSAxMDtcblxuICAgIH0gIGVsc2UgaWYgKGUua2V5ID09PSAncCcpIHtcbiAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkXG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgsIGR4dikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmR5ID0gMDtcbiAgICB0aGlzLmR4diA9IGR4djtcbiAgICB0aGlzLmR5diA9IDE7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmIFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IDAgfHxcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBjYW52YXNXaWR0aCB8fFxuICAgICAgdGhpcy55IDwgMCB8fCBcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gY2FudmFzSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxufSIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTGlsbHlwYWQgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3Qge3gsIHksIGhlaWdodCwgd2lkdGgsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG59XG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5jb25zdCBGcm9nID0gcmVxdWlyZSgnLi9Gcm9nJyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuXG5jb25zdCBuZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpO1xuXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AgKCkge1xuXG4gIGlmIChnYW1lLmlzT3ZlcigpKSB7XG4gICAgY3R4LmZvbnQgPSBcIjEwMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiR2FtZSBPdmVyXCIsIDMwLCAzMDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuXG4gIH0gZWxzZSBpZiAoZ2FtZS5wYXVzZWQgPT09IHRydWUpe1xuICAgIGN0eC5mb250ID0gXCIxMDBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsVGV4dChcIlBhdXNlZFwiLCAxNDAsIDMwMCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbidcbiAgfSBlbHNlIGlmIChnYW1lLnBhdXNlZCA9PT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUubG9nKCdwYXVzZWQnKVxuICB9XG5cbiAgZWxzZSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZ2FtZS5hbmltYXRlKCk7XG4gICAgXG4gICAgbGV0IGxpdmVzID0gZ2FtZS5sb3NlTGl2ZXMoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXZlcycpLmlubmVyVGV4dCA9IGxpdmVzO1xuICAgIGlmIChsaXZlcyA9PT0gMCkge1xuICAgICAgZ2FtZS5lbmRHYW1lKCk7XG4gICAgfVxuXG4gIGxldCBnYW1lTGV2ZWwgPSBnYW1lLmxldmVsIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWwnKS5pbm5lclRleHQgPSBnYW1lTGV2ZWw7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtlZXBTY29yZSk7XG5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEdhbWUpO1xuXG5cbmZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgZ2FtZS5oYW5kbGVLZXlQcmVzcyhlKTsgXG59XG5cbmZ1bmN0aW9uIGFkZExldmVsKCkge1xuICBsZXQgZ2FtZUxldmVsID0gZ2FtZS5sZXZlbCBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVsJykuaW5uZXJUZXh0ID0gZ2FtZUxldmVsO1xufVxuXG5mdW5jdGlvbiBrZWVwU2NvcmUoKSB7XG4gIGxldCBnYW1lU2NvcmUgPSBnYW1lLnNjb3JlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZScpLmlubmVyVGV4dCA9IGdhbWVTY29yZTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gICAgZ2FtZS5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIGdhbWUuc2NvcmUgPSAwO1xuICAgIGdhbWUubGV2ZWwgPSAxO1xuICAgIGdhbWUubGl2ZXMgPSAzO1xuICAgIGdhbWUuZnJvZ3MucmVzZXQoKTtcbiAgICBnYW1lLmR4diA9IDE7XG4gICAgZ2FtZS5jbGVhckxpbGx5UGFkcygpXG4gICAga2VlcFNjb3JlKCk7XG59XG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9