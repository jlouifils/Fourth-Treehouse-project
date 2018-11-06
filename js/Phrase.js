//// this is the phrase js

// create class constuctor call phrase
class Phrase {
  constuctor(phrase) {
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
  const found = 0;
  const theLetter = $('.letter');
  for (let i = 0; i < theLetter.length; i++) {
    if (letter == theLetter[i].textContent) {
      theLetter[i].classList.add('match');
      found +=1;
    }
  }

  if (found > 0) {
    return true;
  } else {
    return false;
  }

}

showMatchedLetter(click) {
  document.querySelectorAll('.letter').forEach( letter =>{
    if (click.textContent === letter.textContent) {
      letter.classList.add('show');
      letter.classList.remove('hide');
      }
    });
  }

}
