const Game = require('./Game');
const Frog = require('./Frog');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

const newGame = document.querySelector('.button');

window.requestAnimationFrame(gameLoop);

function gameLoop () {

  if (game.isOver()) {
    ctx.font = "100px Arial";
    ctx.fillText("Game Over", 30, 300);
    ctx.fillStyle = 'green';

  } else if (game.paused === true){
    ctx.font = "100px Arial";
    ctx.fillText("Paused",110,300);
    ctx.fillStyle = 'green'
  } else if (game.paused === true) {
    console.log('paused')
  }

  else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.animate();
    
    let lives = game.loseLives()
    document.querySelector('.lives').innerText = lives;
    if (lives === 0) {
      game.endGame();
    }

  let gameLevel = game.level 
  document.querySelector('.level').innerText = gameLevel;
  }

  window.requestAnimationFrame(gameLoop)
}


document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', keepScore);
newGame.addEventListener('click', restartGame);


function handleKeyPress(e) {
  game.handleKeyPress(e); 
}

function addLevel() {
  let gameLevel = game.level 
  document.querySelector('.level').innerText = gameLevel;
}

function keepScore() {
  let gameScore = game.score
  document.querySelector('.score').innerText = gameScore;
}

function restartGame() {
    game.gameOver = false;
    game.score = 0;
    game.level = 1;
    game.lives = 3;
    game.frogs.reset();
    game.dxv = 1;
    game.clearLillyPads()
    keepScore();
}






