'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*

2 colors - red black
Each 12 pieces on the odd spaces
Pieces can only move forward, diagonaly
if there is a space past a piece, the piece leaps over and removes that piece
if there is a second option, you can capture again with the same piece
if you get to the other side, you become kinged and can move in any direction

Checker class (color, symbol, position)

board class(3 arrays, 2 sets of pieces and the board)

game class(turn, holds board)

functions

checker.move (start position, end position)

*/

function Checker(s) {
  
  // Creates a checkers class with a symbol parameter
  this.symbol = s;
  
}

function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };
}
function Game() {

  this.board = new Board();
  
  this.start = function() {
    this.board.createGrid();
    
    /*
    * Places checkers onto even spaces of the Board
    * Rows 0 - 3 for Checker X
    * Rows 5 - 8 for Checker O
    * 
    *
    */
    
    for( let rowX = 0; rowX < 3; rowX++ ){
      for ( let columnX = 0; columnX < 8; columnX++ ){
        if ((rowX + columnX) %2 === 0){
          this.board.grid[rowX][columnX] = new Checker('X');
        }
      }
    }
    
    for( let rowO = 5; rowO < 8; rowO++ ){
      for ( let columnO = 0; columnO < 8; columnO++ ){
        if ((rowO + columnO) %2 === 0){
          this.board.grid[rowO][columnO] = new Checker('O');
        }
      }
    }
      
  };
  
  // Changes player from X to O and back again
  
  this.playerTurn = 'X';
  
  this.switch = function() {
    if(this.playerTurn === 'X') {
      this.playerTurn = 'O';
    } else if (this.playerTurn === 'O') {
      this.playerTurn = 'X';
    }
  };
  
  /*
  * Moves the marker from one position to the other
  * Takes in 4 elements: startPosition, endPosition
  * 
  * Call Switch player function
  *
  */
  
  this.moveChecker = function(startPosition, endPosition) {
    
    // Split input into 4 numbers 
    
    let startRow = parseInt(startPosition.substring(0, 1));
    let startColumn = parseInt(startPosition.substring(1, 2));
    let endRow = parseInt(endPosition.substring(0, 1));
    let endColumn = parseInt(endPosition.substring(1, 2));
        
    // check for valid move
    
    
    
        
    // Place new marker and Remove old marker
    
    if (this.playerTurn === 'X') {
      this.board.grid[endRow][endColumn] = new Checker('X');
    }
    
    if (this.playerTurn === 'O') {
      this.board.grid[endRow][endColumn] = new Checker('O');
    }
    
    this.board.grid[startRow][startColumn] === null;

    // Switch player
    
    this.switch();
    console.log('It is player ', this.playerTurn,'s turn');
  };
  
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
