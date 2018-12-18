const game = new Game();

// this function reset the game after the previous game is done
function resetDisplay() {
  var imageOfHeart = $('<img />', {src: "images/LiveHeart.png", alt: "Heart Icon", height: 35, width: 30,
});
  $('#overlay').hide();
  $('#qwerty .key').prop('disabled', false).removeClass('chosen'); //reset the keyboard
  $('#phrase li').remove(); //remove previous phrase when a new game start
  $('.tries').append();
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
