function print(someOne){
  console.log("Hi " + someOne + " the time now is " +new Date);
}

print("Bob");
let intervalID = setInterval(print, 2000, "Mike");
setTimeout(clearInterval, 10000, intervalID);
