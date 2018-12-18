class Phrase {
    constructor(phrase) {
      this.phrase = phrase;
    };

    addPhraseToDisplay() {
      const listPhrase = document.querySelector('#phrase ul');
      const phraseText = this.phrase;

      phraseText.forEach( letterInPhrase => {
        const li = document.createElement('li');
        listPhrase.appendChild(li);
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

    checkLetter(letterClick) {
      var letters = $('.letter');

      let foundLetter = false;
      letters.each((i, value) => {
        if ($(value).text() === letterClick) {

          foundLetter = true;
        }
      });
      return foundLetter
    }


    showMatchLetter(letterClick) {
      $('.letter').each(function() {
        if($(this).text() === letterClick) {
          $(this).addClass('show');
        }
      });
      }
}
