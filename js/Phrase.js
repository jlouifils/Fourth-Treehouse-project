class Phrase {
    constructor(phrase) {
      this.phrase = phrase; //this represent the phrase in the game.js file
    };
// this will hold letters in a placeholder for the leter in the phrases
    addPhraseToDisplay() {
      const listPhrase = document.querySelector('#phrase ul');// create a reference to the ul element
      const phraseText = this.phrase; //give the phrases a variable
// use a forEach loop for the arrays of phrases
      phraseText.forEach( letterInPhrase => {
        // create new list items
        const li = document.createElement('li');
        //add li element to the ul element
        listPhrase.appendChild(li);
        li.setAttribute('class','hide');
        li.textContent = letterInPhrase;
        //If the element parameter does not equal to a blank space then add a class named 'letter' located in css file,
        if(letterInPhrase !== ' ') {
          li.className = 'letter';
        } else {
           //otherwise if there is a blank space then add a class called 'hide space'
          li.className = 'hide space';
        }
          return letterInPhrase;
      });
    }
// the checkLetter will see if the letter the player choose match the letter in the phrase if true it will called showMatchLetter
    checkLetter(letter) {
      var letters = $('.letter');

      let foundLetter = false;
      letters.each((i, value) => {
        if ($(value).text() === letter) {

          foundLetter = true;
        }
      });
      return foundLetter
    }

// if the letter of the player choose mtaches to the one on the phrase it eill show in the  correct placeholder 
    showMatchLetter(letter) {
      $('.letter').each(function() {
        if($(this).text() === letter) {
          $(this).addClass('show');
        }
      });
      }
}
