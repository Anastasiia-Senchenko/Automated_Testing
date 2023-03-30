// Sort the array [1,6,7,8,3,4,5,6] in descending order

let arr = [1,6,7,8,3,4,5,6];

arr.sort (function(a,b) {
  return b-a});
  
console.log(arr);


//Filter array [1,6,7,8,3,4,5,6] by value> 3

let array = [1,6,7,8,3,4,5,6];

let arraySort = array.filter (function(arr) {
  return arr >3});

console.log(arraySort);