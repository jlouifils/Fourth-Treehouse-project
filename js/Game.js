//create game class
const phrase = new Phrase

class Game {
  constructor(missed, phrases) {
    this.missed = missed;
    this.phrases = phrases;
}
  getRandomPhrase() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase.toLowerCase().split('');
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
this.missed = 0;
let gamePhrase = this.getRandomPhrase();
new Phrase(gamePhrase).addPhraseToDisplay()
  }

}
