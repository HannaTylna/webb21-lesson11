/* Räkna ut ålder
    * Året just nu
    * Året du är född

*/
const name = "Hanna";

const currentYear = 2021;
const birthYear = 1989;
const age = currentYear - birthYear;
console.log(name);
console.log(age);

const message = name + " is " + age + " years old";
console.log(message);

const stringWithLinebreak = "Line 1 \nLine 2";
console.log(stringWithLinebreak);

const newMessage = `${name} is ${age} years old`;
console.log(newMessage);

const pi = 3.14;
console.log(typeof(pi));

const isTodayMonday = true;
console.log(isTodayMonday);
console.log(typeof(isTodayMonday));

let theFuture;
console.log(theFuture);
console.log(typeof(theFuture));

let nothing = null;
console.log(nothing);
console.log(typeof(nothing));

const emptyArray = [];
const fruits = ["apple", "banana", "pineapple", "mango", "tomato"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
console.log(typeof(fruits));

const a = 2;
const b = "2";
console.log(a);
console.log(b);

console.log(a == b);
console.log(a === b);

const isTodayTuesday = false;
console.log(!"false");

const banana = "b" + "a" + + "a" + "a";
console.log(banana);

console.log(NaN === NaN);
console.log(typeof(NaN));

const x = 3;
const y = 5;
const z = 3;

console.log(y > x);
console.log(x >= z);

console.log(y>x && x>=z);
console.log(y>x && x>z);

console.log(y>x || x>=z);
console.log(y>x || x>z);

console.log((true || false) && (false || true));
console.log(true || true);

let coronaYear = 2020;
coronaYear++ //coronaYear -= 5; ++coronaYear
console.log(coronaYear);

const user = {
    age: 32,
    birthYear: 1989,
    name: {
        firstName: "Hanna",
        lastName: "Tylna",
    },
    intrests: {
        hobbies: ["programming", "music", "basketboll"]
    },
    isTeacher: false
}
console.log(user.age);
console.log(user.birthYear);
console.log(user.name.firstName);
console.log(user.intrests.hobbies[0])

const car = {
    brand: "Audi",
    modelYear: 2000,
    model: "A3",
    currentMileage: 8000,
    bigServiceMileage: 6000
}

console.log(
    `You own ${car.brand} ${car.model} that has been driven for ${car.currentMileage} km`
);

if(car.currentMileage > car.bigServiceMileage){
    console.log("Time for big service")
}