const phrase = new Phrase();

class Game {

  constructor(missed, phrases) {
    this.missed = missed; // this will hold the 5 tries during the game
    this.phrases =  [ // these are the phrases that will be present during the game
      'ILLMATIC',
      'YES LAWD',
      'KNXWLEDGE',
      'KING KUNTA',
      'COLE WORLD'
  ];
  }
  // getRandomPhrase will get one phrase from above in random order
  getRandomPhrase() {
    var randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
    console.log(randomPhrase)
    return randomPhrase.split('');
  }
  //handleInteraction will check if the button player click is the same as the letter in the phrase
  handleInteraction(letterClick) {
    //if true it called checkForWin
    if(phrase.checkLetter(letterClick) == true) {
      phrase.showMatchLetter(letterClick);
      this.checkForWin();
    } else {
    //  if not it will called removeLife
      this.removeLife();
    }
    this.gameOver();
  }
  //this function remove a life when player click the wrong letter if all life is gone it will call the gameOver
  removeLife() {
    const heart = $('.tries');
    this.missed += 1;
    if(this.missed < 5) {
      heart[0].remove();
    } else if (this.missed === 5) {
      this.gameOver();
    }
  }
  // checkForWin should match the letter length from the phrasebox to the letter that are being click/shown
  checkForWin() {
    const lengthPhrases = $('.letter').length;
    const lengthMatch = $('.letter.show').length;
    //if all the letter length match to the letter being click/shown it should call the gameOver
    if ( lengthPhrases === lengthMatch) {
      return true;
    }
  }
  gameOver() {

    const gameOverMess = $('#game-over-message');
    const overlay = $('#overlay');
    const startButton = $('#btn__reset');
// if all live are gone the messeage and the display at the end game should be you lost and reset the game
    if(this.missed === 5){
    gameOverMess.text('You Lost');
    overlay.show().addClass('Lose');
    startButton.text('Try Again').click(function() {
                location.reload()
            });

  }
  // if the checkForWin is called the message and the display at the end of the game should be you win and reset the game
  else if (this.checkForWin() === true) {
      gameOverMess.text('You Win!!!');
      overlay.show().addClass('Win');
      startButton.text('Go Again').click(function() {
                location.reload()
            });
    }
  };

  //start game and call a new phrase
  startGame() {
    this.missed = 0;
    let gamePhrase = this.getRandomPhrase();
    new Phrase(gamePhrase).addPhraseToDisplay();
  }
}
