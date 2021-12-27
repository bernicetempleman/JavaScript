//cheatsheet https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//built in object methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
Math.random() * 50; // generate raandom bet 0 and 50
Math.floor(Math.random() * 50);
/*Math.random generates a random number between 0 and 1.
We then multiply that number by 50, so now we have a number between 0 and 50.
Then, Math.floor() rounds the number down to the nearest whole number.*/
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

/* There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.*/

/*bjects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
We can access properties and methods by using the ., dot operator.
Built-in objects, including Math, are collections of methods and properties that JavaScript provides.*/