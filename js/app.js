const game = new Game();
  const phrases = [
    'Illmatic',
    'Yes Lawd',
    'Knxwledge',
    'King Kunta',
    'Cole world'
]

function resetDisplay() {
  $('#overlay').hide();
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
