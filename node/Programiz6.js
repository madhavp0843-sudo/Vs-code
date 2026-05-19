const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(n) {

  let num = parseInt(n);
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  console.log("Sum of natural numbers = " + sum);

  rl.close();
});