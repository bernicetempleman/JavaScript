//enter age
let myAge = 21;

//will change
let earlyYears = 2;

//dog years in early years
earlyYears *= 10.5;

myAge -= 2;

//this will change
let laterYears = myAge;

//dog years in lateryears
laterYears *= 4;

//age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//put back 2 years taken off earlier
myAge+=2;
//chnge to lower case
const myName = 'BERNICE'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge } years old in human years which is ${myAgeInDogYears} years old in dog years.`)