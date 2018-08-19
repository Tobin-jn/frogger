const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  if (game.isOver()) {
    console.log('Game Over');

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}



// // keep score and track lives
// var score = document.querySelector('.score')
const lives = document.querySelector('.lives')

document.addEventListener('keyup', keepScore);

function keepScore() {
  let gameScore = game.score
  document.querySelector('.score').innerText = gameScore;

}

function updateLives() {
  console.log('test')
  let gameLives = game.lives
  document.querySelector('.lives').innerText = gameLives;

}
