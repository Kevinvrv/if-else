const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark < BMIJohn) {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`)
} else {
    console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`)
}