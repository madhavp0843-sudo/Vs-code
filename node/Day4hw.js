const user = {
  name: "emma watson",
  hobby: "playing guitar"
};

module.exports = user;
function formatName(name) {
  let result = "";
  let cap = true;

  for (let i = 0; i < name.length; i++) {
    if (cap) {
      result += name.charAt(i).toUpperCase();
      cap = false;
    } else {
      result += name.charAt(i);
    }

    if (name.charAt(i) === " ") {
      cap = true;
    }
  }

  return result;
}

module.exports = formatName;

let user = require("./userInfo");
let formatName = require("./formatName");
let name = formatName(user.name);
let hobby = user.hobby.toUpperCase();
let length = user.hobby.length;

console.log("Name:", name);
console.log("Hobby:", hobby);
console.log("Hobby Length:", length);

