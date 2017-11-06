class car {

  /*
  *
  *
  */

  constructor(make, model, color, mpg, capacity){
    this.make = make;
    this.model = model;
    this.color = color;
    this.gallons = 0;
    this.mpg = mpg;
    this.capacity = capacity;
  }

  fillUp(){
    this.gallons = this.capacity;
  }

  drive(distance){
    let usedUp = distance/this.mpg;
    this.gallons = this.gallons - usedUp;
    let totalGas = this.gallons * this.mpg;

    if (usedUp > totalGas) {
      console.log('You are out of gas');
    }
  }
}

let myCar = new car('Jeep', 'Cherokee', 'Grey', 18, 18);

console.log('My car is a', myCar.make);
console.log('My car has', myCar.gallons, 'gallons of gas');
myCar.fillUp();
console.log('My car has', myCar.gallons, 'gallons of gas');
myCar.drive(100);
console.log('My car has', myCar.gallons, 'gallons of gas');
