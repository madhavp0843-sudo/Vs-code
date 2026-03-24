
let userName = "Alex";
let balance = 1000;
let amountAdded = 500;
let amountSpent = 700;
function updateWallet(name, currentBalance, added, spent) {
    if (name === "guest") {
        return "Access Denied";
    }
    return currentBalance + added - spent;
}

let finalBalance = updateWallet(userName, balance, amountAdded, amountSpent);
console.log("Final Balance:", finalBalance);
console.log("Is balance > 0:", finalBalance > 0);
console.log("Type of final balance:", typeof finalBalance);