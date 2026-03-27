let fs = require('fs');
fs.writeFileSync('user.txt', 'Welcome John');
let data = fs.readFileSync('user.txt', 'utf-8');
function checkUser(text) {
    if (text === 'Welcome John') {
        console.log('Valid User');
    } else {
        console.log('Unknown User');
    }
}

checkUser(data);