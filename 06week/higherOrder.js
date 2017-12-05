'use strict';

const assert = require('assert');

/*
* Call the callback for each item in the array
* @param arr
* @param callback
*/

function forEach(arr, callback) {
  let count = 0;
  let i = 0;

  while ( i < arr.length ) {
    callback(count++);
    i++
  }
  return count;
}

/*
* Returns a new array with the callback applied to each item in the array
* @param arr
* @param callback
*/

function map(arr, callback) {
  let i = 0;
  let newArray = [];
  
  while ( i < arr.length ) {
    let newNum = callback(arr[i]);
    newArray.push(newNum);
    i++
  }
  return newArray;
}

/*
* Returns a new array with the items that pass the callback
* @param arr
* @param callback
*/

function filter(arr, callback) {
  let newArray = [];
  let i = 0;

  while(i < arr.length){
    if(callback(arr[i])){
      newArray.push(arr[i]);
    }
    i++
  }
  
  return newArray;
}

/*
* Returns true for the first item that matches the callback requirement 
* Returns false if no items in the array match the requirement
* @param arr
* @param callback
*/

function some(arr, callback) {
  
  let i = 0;

  while(i < arr.length){
    if(callback(arr[i]) == true){
      return true;
    } 
    i++
  }
  return false;
}

/*
* Returns true if each item in the array match the requirement
* Returns false if any items in the array match the requirement
* @param arr
* @param callback
*/

function every(arr, callback) {
  let i = 0;

  while(i < arr.length){
    if(callback(arr[i]) == false){
      return false;
    } 
    i++
  }
  return true;
}

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
