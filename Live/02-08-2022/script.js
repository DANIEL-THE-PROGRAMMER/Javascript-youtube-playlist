// // // Strings and Literals
//const firstName = "NJI";
// const job = "Software Engineer";
// // const birthYear = "2001";
// const year = 2037;

// // Template Literals 
// const bofoa = "I'm" + firstName + ", a " + (year - birthYear) + " years old" + job + "!"
// console.log(bofoa);

// //Template Literals (Easier way to write strings)
// const danNew =`I'm ${firstName}, a ${job} and i am ${year - birthYear} years old`
// console.log(danNew);


// console.log(`Daniel
// The
// Programmer`);

// //If/ Else control Structure
// const age = 13;
// const isOldEnough = age >= 18;
// console.log(isOldEnough);

// if (isOldEnough){
//     console.log("Daniel can start Coding");
// } else {
//     const yearsLeft = age - 5 ;
//     console.log(`Daniel is too young, wait another ${yearsLeft} years : `);
// }

// // Find Century
// const birthYear = 1990;
// const century = birthYear - 20;

// if (birthYear <= 2000) {
//     console.log("century");
// } else {
//     console.log("century");
// }

// ASSIGNMENT 2 SOLUTION
//1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

//2 
const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark , BMIJohn);
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`);
}else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`);
}