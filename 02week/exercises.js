// 1

let cars = ['Ford', 'Chevy', 'Subaru', 'Jeep'];

console.log('1: ' + cars.length);

// 2

let moreCars = ['BMW', 'Benz', 'Toyota', 'Honda'];

let totalCars = cars.concat(moreCars);

console.log('2: ' + totalCars);

// 3

console.log('3a: ' + totalCars.indexOf('Honda'));
console.log('3b: ' + totalCars.lastIndexOf('Ford'));

// 4

let stringOfCars = totalCars.join(", ");
console.log('4: ' + stringOfCars);

// 5

let newTotalCars = stringOfCars.split(", ");
console.log('5: ' + newTotalCars);


// 6

let reverseCars = newTotalCars.reverse();
console.log('6: ' + reverseCars);

// 7

let sortedCars = reverseCars.sort();
console.log('7: ' + sortedCars);

// 8

let removedCars = reverseCars.slice(3, 5);
console.log('8: ' + removedCars);

// 9

let splicedCars = reverseCars.splice(1, 2, 'Ford', "Honda");
console.log('9: ' + splicedCars);

// 10

let hoorayCars = reverseCars.push('Ford', 'Honda');
console.log('10: ' + hoorayCars);

// 11

console.log('11: ' + reverseCars.pop());

// 12

console.log('12: ' + reverseCars.shift());

// 13

let yayCars = reverseCars.unshift('Mazda');
console.log('13: ' + yayCars);

// 14

let numbers = [25, 45, 0, 2];

numbers.forEach(function(item) {
  let added = item + 2;
  console.log('14: ' + added)

});
