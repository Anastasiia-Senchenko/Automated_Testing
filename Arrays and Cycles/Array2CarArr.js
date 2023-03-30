// Given an array of car manufacturers, convert the array to a string and back to an array

const myArray = [
  "Audi",
  "BMW",
  "Honda",
  "Lamborgini",
]

const convString = myArray.join();
console.log(convString);

const backToArray = convString.split(",");
console.log(backToArray);