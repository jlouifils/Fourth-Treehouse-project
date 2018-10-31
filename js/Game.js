const phrase = new Phrase();

//create game class
class Game {
  constuctor() {
    this.missed = 0;
    this.phrases = [
          new Phrase('don dotta'),
          new phrase('knxledge'),
          new phrase('yes lawd'),
          new phrase('suga mama'),
          new phrase("d'evil")
    ];
  }

  getRandomPhrase() {
    let randomPhrase = [Math.floor(Math.random() * phrase.length)];
    return randomPhrase;
    console.log(randomPhrase);
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
