const phrase = new Phrase();

class Game {

  constructor(missed, phrases) {
    this.missed = missed;
    this.phrases =  [
      'Illmatic',
      'Yes Lawd',
      'Knxwledge',
      'King Kunta',
      'Cole world'
  ];
  }
  getRandomPhrase() {
    var randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
    console.log(randomPhrase)
    return randomPhrase.split('');
  }
  handleInteraction(letterClick) {
    if(phrase.checkLetter(letterClick) == true) {
      phrase.showMatchLetter(letterClick);
      this.checkForWin();
    } else {
      this.removeLife();
    }
    this.gameOver();
  }
  removeLife() {
    const heart = $('.tries');
    this.missed += 1;
    if(this.missed < 5) {
      heart[0].remove();
    } else if (this.missed === 5) {
      this.gameOver();
    }
  }
  checkForWin() {
    const lengthPhrases = $('div ul li.letter').length;
    const lengthMatch = $('div ul li.match').length;
    if ( lengthPhrases === lengthMatch) {
      return true;
    }
  }
  gameOver() {
    //$('#overlay').css('display', 'block');

    const gameOverMess = $('#game-over-message');
    const overlay = $('#overlay');
    const startButton = $('#btn__reset');

    if(this.missed === 5){
    gameOverMess.text('You Lost');
    overlay.show().addClass('Lose');
    startButton.text('Try Again');
  }
  else if (this.checkForWin() === true) {
      gameOverMess.text('You Win!!!');
      overlay.show();
      startButton.text('Go Again');
    }
  }
  startGame() {
    this.missed = 0;
    let gamePhrase = this.getRandomPhrase();
    new Phrase(gamePhrase).addPhraseToDisplay();
  }
}
