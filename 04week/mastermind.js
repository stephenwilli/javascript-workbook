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

function generateHint(guess) {

  /*
  * This function checks for matches between the guess and solution
  * Returns the matching letters (in Red) or letter & positions (in Green)
  *
  * @param: guess - the guess entered into the prompt
  *
  * @return: Color coded numbers
  */

  let guessArray = guess.split('');
  let solutionArray = solution.split('');

// Find correct letter locations
  let correctLocation = 0;
  let j = 0;

  while(j < guessArray.length) {
    if (solutionArray[j] === guessArray[j]){
      correctLocation = correctLocation + 1;
    }
    j++;
  }

// Find correct letters
  let correctLetter = 0;
  let i = 0;

  while(i < guessArray.length) {
    let guessIndex = solutionArray.indexOf(guessArray[i]);
    if (guessIndex > -1) {
        correctLetter = correctLetter + 1;
        solutionArray[guessIndex] = null;
    }
    i++;
  }

// Returns the color coded hint
  let hint = colors.green(correctLocation) + " - " + colors.red(correctLetter);
  return hint;
  
}

function mastermind(guess) {

  /*
  *  This function detects if the guess matches the solution. If true, the player wins, if false it
  *  responds with generateHint that shows the correct postitions in the guess and ask the player to guess again.
  *  Also pushes the guess to the board to track.
  *  Should test if the guess is a string of four letters between a and h and give the player 10 turns to guess
  *
  *  @param: guess - the inputted string of four letters
  *  @return: true/false
  */

  // solution = 'abcd'; // Comment this out to generate a random solution

  let lowerGuess = guess.toLowerCase().trim();

  if (lowerGuess.length > 4){
    console.log('Your guess can only be 4 letters between a - h');
  } else {

    if(lowerGuess === solution) {
      console.log(colors.green('Correct. You win!'));
      process.exit();
    } else if (board.length < 10) {
        let hint = generateHint(lowerGuess);
        board.push(lowerGuess + ' : ' + hint);
    } else if (board.length >= 10) {
        console.log('You only get 10 guesses, the solution was ' + solution);
        process.exit();
    }
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
