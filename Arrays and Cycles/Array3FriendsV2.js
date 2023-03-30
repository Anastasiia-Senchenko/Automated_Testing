// Given an array of the names of your friends, add the words hello to each element of the array

const friendsName = [
  "Maria",
  "Anna",
  "Yana",
];

const greetingsName = (arr) => {
  return arr.map(n=> n + " Hello!")
};

console.log(greetingsName(friendsName));
