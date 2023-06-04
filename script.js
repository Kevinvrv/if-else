// if else controlled structure

const age = 15;

if(age >= 18) {
    console.log('Sarah can start drivng license 🚗')

} else {
    const yearsleft = 18 - age;
    console.log(`sarah is too young. she needs to wait ${yearsleft} years`)
}


const birthyear = 1991;
let century;

if(birthyear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);