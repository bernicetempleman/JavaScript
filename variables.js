var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe =true;
changeMe = false;
console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);
//entree = 'Tacos'
//can't change const

//const testing;
//it’s related to syntax, you need to initialize a const variable with a value.

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;



// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar ++;
lostDollar--;

let favoriteAnimal = 'armadillo';
console.log('My favorite animal: '+ favoriteAnimal);

const myName = 'Bernice';
const myCity = 'Youngstown';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
/*
String Interpolation
In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
Notice that:

a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'
One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don’t have to worry about escaping double quotes or single quotes.
*/
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean


let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

