const game = new Game();

// this function reset the game after the previous game is done
function resetDisplay() {
  $('#overlay').hide();
  $('#qwerty .key').prop('disabled', false).removeClass('chosen'); //reset the keyboard
  $('#phrase li').remove(); //remove previous phrase when a new game start
  const lives = document.querySelectorAll('img');
      for(let i = 0; i < lives.length; i++){
        lives[i].src = 'images/liveHeart.png';
      }
}

function markButton(event) {
  event.target.disabled = true;
  event.target.classList.add('chosen');
  event.target.classList.add(event.target.textContent);
}

$('#qwerty').on('click', (event) => {
  markButton(event);
  game.handleInteraction(event.target.innerHTML.toUpperCase());
});

$("#btn__reset").on('click', (event) => {
  resetDisplay()
  game.startGame();
});
