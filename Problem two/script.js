const danMass = 80;
const danHeight = 1.78;
const vicMass = 92;
const vicHeight = 1.92;

const BMIDan = danMass / danHeight ** 2;
const BMIVic = vicMass / vicHeight ** 2;
// const vicHigherBMI = BMIVic > BMIDan;

console.log(BMIDan, BMIVic);

if (BMIDan > BMIVic) {
    console.log(`Dan's BMI ${BMIDan} is higher than Vic's BMI ${BMIVic}`);
} else {
    console.log(`Vic's BMI ${BMIVic} is higher than Dan's BMI ${BMIDan}`);


}

// Brief overview
const nji = 18;
console.log(nji);
console.log(Boolean(0));
console.log(Boolean(njit));