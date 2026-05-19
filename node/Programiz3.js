
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);
    let factorial = 1;

    if (number < 0) {
        console.log("Factorial is not defined for negative numbers");
    } else {
        for (let i = 1; i <= number; i++) {
            factorial = factorial * i;
        }
        console.log(`Factorial of ${number} is ${factorial}`);
    }

    rl.close();
});