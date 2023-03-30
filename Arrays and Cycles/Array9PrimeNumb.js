//Implement a loop that prints prime numbers to the console

const n = 25;

prime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++){
    if (i % j == 0) continue prime;
   }
   console.log(i);
}
