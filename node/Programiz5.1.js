const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a number: ", function(num) {

  let number = parseInt(num);
  let temp = number;
  let sum = 0;

  let digits = num.length;

  while (temp > 0) {
    let remainder = temp % 10;          
    sum += Math.pow(remainder, digits); 
    temp = Math.floor(temp / 10);       
  }

  if (sum === number) {
    console.log(number + " is an Armstrong number");
  } else {
    console.log(number + " is NOT an Armstrong number");
  }

  rl.close();
});