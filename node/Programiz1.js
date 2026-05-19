
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    console.log(
        isPrime? `${number} is a Prime Number`  : `${number} is NOT a Prime Number`
    );

    rl.close();
});