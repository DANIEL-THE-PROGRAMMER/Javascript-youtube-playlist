const inputYear = "1992"
const danNew = "Young"
const num = 12;
// Convert String to Number

console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// To Number
console.log(Number("Daniel"));
console.log(typeof inputYear);
console.log(typeof danNew);
console.log(typeof num);
console.log(typeof NaN);

// To String
console.log(String(23));

// falsy Values = 0, undefined, '' , null , NaN
// aNYTHING THAT IS NOT FALSY IS TRUTHY
const nji = "precious";
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(nji));

// Equality Operators
// let height = 123;
// if (height) {
//     console.log("Yay! Height is Well Defined");
// } else {
//     console.log("Height is Undefined");
// }

const age = 100;
if (age === 100) console.log("You just  became an adult(strict)");
if (age == 100) console.log("You just  became an adult(loose)");

const favourite = Number(prompt("What is your Favorite Number ?"));
console.log(favourite);

// Check if it is great Number
// != This is the Not Equality
if(favourite != 23){
    console.log("Cool! 23 is an amazing Number");
} else if (favourite === 7) {
    console.log("7 is also a Number");
} else if (favourite === 9) {
    console.log("9 is a cool Number");
} else {
    console.log("Number isn't 23 nor 7 or 9");
}





