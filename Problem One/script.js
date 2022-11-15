const danMass = 88;
const danHeight = 1.89;
const vicMass = 98;
const vicHeight = 2.95;

const BMIDan = danMass / danHeight ** 2;
const BMIVic = vicMass / vicHeight ** 2;
const danHigherBMI = BMIDan > BMIVic;

console.log(BMIDan, BMIVic);
console.log(danHigherBMI);