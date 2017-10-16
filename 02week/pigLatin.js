'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  // set word variable
  // Define what vowels are (needles)
  // 3 cases
  //  - if - Move first constanant to end + 'ay' (indexOf needle is 1)
  //  - if - Move letters up until first vowel (indexOf needle > 1)
  //  - if - First letter is a vowel, add yay (indexOf needle is 0)

  // multiple needles (a, e, i, o, u, y)
  // which needle has smaller index

    let haystack = "bob is a nice guy";
    let needle = "y";
    console.log(haystack.indexOf(needle));

    let fullWord = "straw";
    let firstHalf = fullWord.substring(0,3); // 3 index of first vowel
    let secondHalf = fullWord.substring(3);
    console.log(firstHalf);

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
