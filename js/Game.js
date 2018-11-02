//create game class
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
'don dotta',
'knxledge',
'yes lawd',
'suga mama',
"d'evil"
    ];
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  handleInteraction(letter) {
    phrase.checkLetter(letter);
    $('#qwerty button').on('click', () =>{
      phrase.showMatchedLetter(letter);
    })
  }


removeLife() {
  this.missed +=1;
  $('.tries').eq([this.missed]).remove();
}

checkForWin() {
  if (this.missed === 5) {
    return false;
  } else {
    return true;
  }
}

gameOver() {
  const goMess = $('#game-over-messeage')
  const overlay = $('#overlay')

  if (this.checkForWin() = true) {
    goMess.text('you Win');
    overlay.show()
  } else {
    goMess.text('You Lose');
    overlay.show().addClass('lose');
  }
}


startGame() {
window.phrase = new Phrase(game.getRandomPhrase())
  }

}
