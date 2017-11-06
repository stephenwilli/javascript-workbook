'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {

  /*
  * This function moves a piece from one stack to the next
  *
  * @param: startStack - The array the piece starts at
  * @param: endStack - The array the piece ends at
  * @return: The updated stacks object
  *
  */

  let piece = stacks[startStack].pop();
  stacks[endStack].push(piece);

}

function isLegal(startStack, endStack) {

  /*
  * This function checks if the moving piece is smaller than the piece it is moved on top of
  *
  * @param: startStack - The array the piece starts at
  * @param: endStack - The array the piece ends at
  * @return: True or false
  *
  */

  let movingPiece = stacks[startStack][stacks[startStack].length - 1];
  let stillPiece = stacks[endStack][stacks[endStack].length - 1];

  if(stillPiece === undefined || movingPiece < stillPiece) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {

  /*
  * This function checks if stacks B or C have the winning combination of 4,3,2,1
  *
  * @return: True or false
  *
  */

  if (stacks['c'][0] === 4 && stacks['c'][1] === 3 && stacks['c'][2] === 2 && stacks['c'][3] === 1){
    return true;
  } else if(stacks['b'][0] === 4 && stacks['b'][1] === 3 && stacks['b'][2] === 2 && stacks['b'][3] === 1) {
    return true;
  }

}

function towersOfHanoi(startStack, endStack) {

  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack);

  } else {
    console.log('Illegal Move');
  }

  if (checkForWin()){
    console.log('You Win!!');
    printStacks();
    process.exit()
  }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();
