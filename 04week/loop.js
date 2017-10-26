// Use a for loop to console.log each item in the array cars

let cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (i = 0; i < cars.length; i ++) {
  console.log(cars[i]);
}

/* Use a for...in loop to console.log each key.
*  Then use a for...in loop and if state to console.log the value associated with the key birthDate
*/

let persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

for (let prop in persons) {
  console.log(prop + " is " + persons[prop]);
}

// Use a do...while loop to console.log the numbers from 1 to 100

var i = 1;
do {
    console.log(i)
    i++;
}
while (i < 101);

// Log even numbers

for (number = 0; number <=100; number++) {
 if (number % 2 == 0){
   console.log(number);
 }
}

// Without an if statement

for (newNumber=1; newNumber<=99; newNumber++){
  newNumber = newNumber +1;
  console.log(newNumber);
}

// While loops can be faster than for loops, negative while loops can be even faster. Source: https://stackoverflow.com/questions/18640032/javascript-performance-while-vs-for-loops

// A for in loop will look for values & keys within an object

// A do while loop runs once before the check
