const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  if (game.isOver()) {
    console.log('Game Over');

  } else if (game.paused === true){
    console.log('paused')
  }

  else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
    
    let lives = game.loseLives()
    document.querySelector('.lives').innerText = lives;
    if (lives === 0) {
      game.endGame();
    }

  let gameLevel = game.level 
  document.querySelector('.level').innerText = gameLevel;
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function addLevel() {
  let gameLevel = game.level 
  document.querySelector('.level').innerText = gameLevel;
}

document.addEventListener('keyup', keepScore);

function keepScore() {
  let gameScore = game.score
  document.querySelector('.score').innerText = gameScore;

}




