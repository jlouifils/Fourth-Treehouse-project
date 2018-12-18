const game = new Game();

function resetDisplay() {
  $('#overlay').hide();
  $('#qwerty .key').prop('disabled', false).removeClass('chosen');
  $('#phrase li').remove();
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
