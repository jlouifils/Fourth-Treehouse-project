
const phrases = [
  'don dotta',
  'knxledge',
  'yes lawd',
  'suga mama',
  "d'evil"
  ];

  const game = new Game(0, phrases);

 function resetDisplay() {
   $('#overlay').hide();
 }


function markButton() {
  $('#qwerty button').on('click', (e) =>{
    e.target.disabled = true;
    e.target.classList.add('chosen')
  });
}


window.addEventListener('click', (evt) =>{
  if(evt.target.tagName === 'BUTTON') {
    markButton();
    game.handleInteraction(evt);
  }
});


$('#btn__reset').on('click', () =>{
  resetDisplay()
  game.startGame()
});

//console.log(game.getRandomPhrase());
