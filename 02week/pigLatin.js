'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function pigLatin(word) {

  // set word variable
  // Define what vowels are (needles)
  // 3 cases
  //  - if - Move first constanant to end + 'ay' (indexOf needle is 1)
  //  - if - Move letters up until first vowel (indexOf needle > 1)
  //  - if - First letter is a vowel, add yay (indexOf needle is 0)


    let lowerWord = word.toLowerCase().trim();

    let a = lowerWord.indexOf('a');
    let e = lowerWord.indexOf('e');
    let i = lowerWord.indexOf('i');
    let o = lowerWord.indexOf('o');
    let u = lowerWord.indexOf('u');

    let min = null;

    if (a > -1 && (min > a || min == null)) {
      min = a;
    }

    if (e > -1 && (min > e || min == null)) {
      min = e;
    }

    if (i > -1 && (min > i || min == null)) {
      min = i;
    }

    if (o > -1 && (min > o || min == null)) {
      min = o;
    }

    if (u > -1 && (min > u || min == null)) {
      min = u;
    }

    let pigWord;

    if (min === 0) {

      pigWord = lowerWord + "yay";

    } else if (min == null) {

      pigWord = lowerWord + "ay";

    } else {

      let firstHalf = lowerWord.substring(0, min);
      let secondHalf = lowerWord.substring(min);
      pigWord = secondHalf + firstHalf + "ay";

    }
    return pigWord;
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
