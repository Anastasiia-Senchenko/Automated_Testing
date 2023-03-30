// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

const array = [1,3,15,16,20,55];

function findIndexOfArrayElementByNumber (arr, num) {
return arr.indexOf(num)
}

console.log(findIndexOfArrayElementByNumber(array, 16));