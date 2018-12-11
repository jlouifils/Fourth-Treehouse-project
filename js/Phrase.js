class Phrase {
    constructor(phrase) {
      this.phrase = phrase;
    };

    addPhraseToDisplay() {
      const listPhrase = document.querySelector('#phrase ul');
      const phraseText = this.phrase;

      phraseText.forEach( letterInPhrase => {
        const li = document.createElement('li');
        listPhrase.appendChild('li');
        li.setAttribute('class','hide');
        li.textContent = letterInPhrase;
        if(letterInPhrase !== ' ') {
          li.className = 'letter';
        } else {
          li.className = 'space';
        }
          return letterInPhrase;
      });
    }



    checkLetter(letter) {
    const liPhrase = $('div ul li');
    const liPhraseText = $('div ul li').text().split('');
    const click = letter;
    let call = false;

    liPhrase.each(function () {
      if($(this).text() === click) {
        $(this).addClass('match');
        call = true;
      }
    });
    }

    showMatchLetter(letter) {
      const match = document.querySelector(',match')
      for (let i =0; i < match.length; i += 1) {
        const right = match[i];
        right.classList.add('show');
        right.classList.remove('hide');
      }
    }
}
