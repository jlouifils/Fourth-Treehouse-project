//this is app.js
const game = new Game();

const phrase = [
'don dotta',
'knxledge',
'yes lawd',
'suga mama',
"d'evil"
];


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
