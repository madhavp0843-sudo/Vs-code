
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
rl.question("Enter start number: ", (startInput) => {
    rl.question("Enter end number: ", (endInput) => {

        const start = parseInt(startInput);
        const end = parseInt(endInput);

        console.log(`Prime numbers between ${start} and ${end}:`);

        for (let i = start; i <= end; i++) {
            if (isPrime(i)) {
                console.log(i);
            }
        }

        rl.close();
    });
});