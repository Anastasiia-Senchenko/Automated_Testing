//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const string = '2 + 3 223 2223';
const regex = /\d+\s*\+\s*\d+/; 

const result = string.match(regex); 

console.log(result[0]);
