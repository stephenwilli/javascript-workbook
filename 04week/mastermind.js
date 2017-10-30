'use strict';

const colors = require('colors');
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {

  /*
  * This function prints the matching letters (in Red) or letter & positions (in Green) between the guess
  * and solution.
  *
  * @param: soltion - The randomly generated solution
  * @param: guess - the guess entered into the prompt
  *
  * @return: Color coded numbers
  */



}

function mastermind(guess) {

  /*
  *  This function detects if the guess matches the solution. If true, the player wins, if false it
  *  responds with generateHint that shows the correct postitions in the guess and ask the player to guesss again.
  *  Should also test if the guess is a string of four letters between a and h.
  *
  *  @param: guess - the inputted string of four letters
  *  @return: true/false
  */

  solution = 'abcd'; // Comment this out to generate a random solution
  if(guess === solution) {
    console.log(colors.green('You guessed it!'));
  } else {
    printBoard();
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
      it('should generate hints', () => {
        let expected = ('2'.red)+"-"+('2'.white);
        assert.equal(generateHint('abdc'), expected);
      });
      it('should generate hints if solution has duplicates', () => {
        let expected = ('1'.red)+"-"+('1'.white);
        assert.equal(generateHint('aabb'), expected);
      });
    });

} else {

  generateSolution();
  getPrompt();
}
