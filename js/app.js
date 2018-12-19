const game = new Game();

// this function reset the game after the previous game is done
function resetDisplay() {
  $('#overlay').hide();
  $('#qwerty .key').prop('disabled', false).removeClass('chosen'); //reset the keyboard
  $('#phrase li').remove(); //remove previous phrase when a new game start
}
// this function diabled the button after being click
function markButton(event) {
  event.target.disabled = true;
  event.target.classList.add('chosen');
  event.target.classList.add(event.target.textContent);
}
// when a letter on the screen is click it will call markButton and the handleInteraction
$('#qwerty').on('click', (event) => {
  markButton(event);
  game.handleInteraction(event.target.innerHTML.toUpperCase());//capitolized the letter on the box phrase
});
//when the start button is click it reset the game and start it
$("#btn__reset").on('click', (event) => {
  resetDisplay()
  game.startGame();
});
