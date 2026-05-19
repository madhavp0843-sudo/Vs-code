const str1 = "//hello";
const str2 = "//llheo";

function string(str){
    return str.split('').sort().join();
}

if (string(str1)===string(str2)){
    console.log("Both string are equal")
}
else{
    console.log("Both string are not equal")
}