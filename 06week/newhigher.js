// Map returns new array

// let array = [1,2,3,4,5];
//
// let myConversion = function(num) {
//   return -1*num;
// }
//
// let converted = array.map(myConversion);
//
// console.log(converted);

// Filter returns what matches condition

// let array2 = [1,2,3,4,5];
//
// let evenFilter = function(num){
//   if(num %2 == 0){
//     return true;
//   } else {
//     return false;
//   }
// }
//
// let filtered = array.filter(evenFilter);
// console.log(filtered);

// 

// let array = [1,2,3,4,5];
// 
// let evenFilter = function(num){
//   return num %2 === 0;
// };
// 
// let oddFilter = function(num){
//   return num %2 != 0;
// };
// 
// function myFilters(arr, callback) {
// 
//   let expected = [];
//   let i = 0;
// 
//   while(i < arr.length){
//     if(callback(array[i])){
//       expected.push(array[i]);
//     }
//     i++
//   }
//   
//   return expected;
// };
// 
// let filtered2 = myFilters(array, oddFilter);
// console.log(filtered2);

// 

let array1 = [99,87,23,67,13,77];

let gradeConverter = function(num) {
  return num*num;
}

let myMap = function(arr, callback) {
  let i = 0;
  let newArray = [];
  
  while ( i < arr.length ) {
    let newNum = callback(arr[i]);
    newArray.push(newNum);
    i++
  }
  return newArray;
}

let converted = myMap(array1, gradeConverter);
console.log(converted);









