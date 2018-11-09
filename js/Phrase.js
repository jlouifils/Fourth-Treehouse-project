//// this is the phrase js

// create class constuctor call phrase
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  };

addPhraseToDisplay() {
  const phraseList = document.querySelector('#phrase ul');
  const textPhrase = this.phrase;

  textPhrase.forEach(phraseLetter => {
      const li = document.createElement('li');
      phraseList.appendChild(li);
      li.setAttribute('class', 'hide');
      li.textContent = phraseLetter;
      return phraseLetter !== ' ' ? li.className = 'letter' : li.className = 'space';
    });
}

checkLetter(letter){
  let found = false;
  const theLetter = $('.letter');
  for (let i = 0; i < theLetter.length; i++) {
    if (letter == theLetter[i]) {
      found = true;
    }
  }
return found;

}

showMatchedLetter(click) {
  document.querySelectorAll(' letter').forEach( letter =>{
    if (click.textContent === letter.textContent) {
      letter.classList.add('show');
      letter.classList.remove('hide');
      }
    });
  }

}
