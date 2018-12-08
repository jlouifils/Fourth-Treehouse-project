const startButton = document.querySelector("#btn__reset");
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelector('#qwerty');

let game;
  const phrases = [
    'Illmatic',
    'Yes Lawd',
    'Knxwledge',
    'King Kunta',
    'Cole world'
]

function resetDisplay() {
overlay.style.display = 'none'
}

function markButton(target, key) {
$('.key').target.disabled = true;
Game.handleInteraction(key)
}

startButton.addEventListener('click', (event) => {
  resetDisplay()
let game = new Game;
  game.startGame();
});

qwerty.addEventListener('click', (event) => {
  markButton(event)
});
