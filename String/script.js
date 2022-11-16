//Sring and Template literals
const firstName = "NJI";
const job = "Software Engineer";
const birthYear = "1999";
const year = "2000";

const nji = "I'm " + firstName + " am " + (year - birthYear) + " years old " + job + "!";

console.log(nji);

const danNew = `I'm ${firstName}, a ${job} and i am ${year - birthYear} years old`
console.log(danNew);

console.log(` Daniel
The 
Programmer`);