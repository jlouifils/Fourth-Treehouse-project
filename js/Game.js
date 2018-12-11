const phrase = new Phrase();

class Game{

  constructor(missed, phrases) {
    this.missed = missed;
    this.phrases = phrases;
  }
  getRandomPhrase() {
    var randomPhrase = phrases[math.floor(math.random()*phrases.length)];
    console.log(randomPhrase)
    return randomPhrase
  }
  handleInteraction(letterClick) {
    if(phrase.checkLetter(letterClick) == true) {
      phrase.showMatchLetter(letterClick);
      this.checkForWin();
    } else {
      removeLife();
    }
  }
  removeLife() {
    const heart = $('.tries');
    this.missed += 1;
    if(this.missed < 5) {
      heart[0].remove()
    } else if (this.missed === 5) {
      this.gameOver();
    }
  }
  checkForWin(){

  }
  gameOver() {

  }
  startGame() {
    this.missed = 0;
    let
  }

}
