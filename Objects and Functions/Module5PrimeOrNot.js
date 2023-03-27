//Write a function that determines whether a number is prime or not

function checkPrimeNumber(n) {
  for (let i=2; i<n; i++) {
    if (n % i === 0) return n + " is not a prime number";

  }
  return n + " is a prime number";
}

console.log(checkPrimeNumber(22));
console.log(checkPrimeNumber(13));
console.log(checkPrimeNumber(3));
console.log(checkPrimeNumber(55));
