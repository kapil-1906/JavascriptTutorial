const lastName = "Sharma";
const middleName = "";

if(middleName){
    console.log("having a middle name");
}else if(lastName){
    console.log("having a last name");
}else{
    console.log("No value");
}


const a = "130";
const b = parseFloat(a);

console.log(b);


var k = 20;
var t = "20";

console.log(k==t); // true   it will check only value
console.log(k===t); // false it will chack the type too
