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

    // I figured there was a regex solution to finding the vowel, even though I had to look it up

    // let needle = lowerWord.match(/[aeiou]/gi);

    let a = lowerWord.indexOf('a');
    let e = lowerWord.indexOf('e');
    let i = lowerWord.indexOf('i');
    let o = lowerWord.indexOf('o');
    let u = lowerWord.indexOf('u');

    let min = null;

    if (min == null || min > a && a > 0) {
      let min = a;
    } else if (min == null || min > e && e > 0) {
      let min = e;
    } else if (min == null || min > i && i > 0) {
      let min = i;
    } else if (min == null || min > o && o > 0) {
      let min = o;
    } else if (min == null || min > u && u > 0) {
      let min = u;
    }

    if (min === 0) {

      let pigWord = lowerWord + "yay";
      console.log(pigWord);

    } else if (min === 1) {

      let firstHalf = lowerWord.substring(0,1);
      let secondHalf = lowerWord.substring(1);
      let pigWord = secondHalf + firstHalf + "ay";
      console.log(pigWord);

    } else {

      let firstHalf = lowerWord.substring(0, min);
      let secondHalf = lowerWord.substring(min);
      let pigWord = secondHalf + firstHalf + "ay";
      console.log(pigWord);

    }

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
