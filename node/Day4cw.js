let name = "emma watson";
let hobby = "playing guitar";
module.exports = { name, hobby };

function formatName(fullName) {
    let spaceIndex = fullName.indexOf(' ');

    let first = fullName.charAt(0).toUpperCase() + fullName.slice(1, spaceIndex);
    let last = fullName.charAt(spaceIndex + 1).toUpperCase() + fullName.slice(spaceIndex + 2);

    return first + " " + last;
}

module.exports = formatName;