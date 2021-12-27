//function declaration binds to a variable name

//hoisting: allows access to function before defined
greetWorld(); // Output: Hello, World!

function greetWorld() {
    console.log('Hello, World!');
}

/*
Let’s create a function that prints a reminder to the console. 
Using a function declaration, create a function called getReminder().
*/
function getReminder() {
    console.log('Water the plants.');
}

function greetInSpanish() {
    console.log('Buenas Tardes.')
}

//calling a function multiple times
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();

sayThanks();

sayThanks();

//parameters and arguments

function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole');

//default parameters

/*
One of the features added in ES6 is the ability to use default parameters. 
Default parameters allow parameters to have
 a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.
  */

function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

//shopping list
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList();
makeShoppingList('fruit', 'vegetables', 'nuts');
makeShoppingList('fruit', 'vegetables');

//return

/*
When a function is called, the computer will run through the function’s code 
and evaluate the result of calling the function. By default that resulting value is undefined.
*/
function rectangleArea1(width, height) {
    let area = width * height;
  }
  console.log(rectangleArea1(5, 7)) // Prints undefined... need to use return
  console.log(rectangleArea(-1,1));

  function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }

  //culculate number of monitors
  function monitorCount(rows, columns){
    return rows * columns;
    }
    
    const numOfMonitors  = monitorCount(5,4);
    console.log(numOfMonitors);

    //helper functions
    function multiplyByNineFifths(number) {
        return number * (9/5);
      };
       
      function getFahrenheit(celsius) {
        return multiplyByNineFifths(celsius) + 32;
      };
       
      getFahrenheit(15); // Returns 59


      //monitor
      function monitorCount(rows, columns) {
        return rows * columns;
      }
      
      function costOfMonitors(rows, columns){
        return 200 * monitorCount(rows, columns);
      }
      
      const totalCost =  costOfMonitors(5,4);
      console.log(totalCost);

      //Function Expressions
      /*
      To define a function inside an expression, we can use the function keyword. 
      In a function expression, the function name is usually omitted.
       A function with no name is called an anonymous function. 
       A function expression is often stored in a variable in order to refer to it.

       o declare a function expression:

Declare a variable to make the variable’s name be the name, or identifier,
 of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters.
 Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.
     variableName(argument1, argument2)
Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.
*/
const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
      return true;
    }
    else
      return false;
  }
  
  console.log (plantNeedsWater ('Tuesday'));

  /*
Arrow Functions
ES6 introduced arrow function syntax, a shorter way to write functions by using 
the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. 
Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
  */
const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };

  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
  //concise body arrow function
  /*
  The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

  Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However,
   if a function takes zero or multiple parameters, parentheses are required.
  */

   const functionName0 = () => {}; //zero param
   const functionName1= param1 => {}; // one parameter
   const functionName1 = (param1, param2) => {}; two parameter

   /*
A function body composed of a single-line block does not need curly braces.
 Without the curly braces, whatever that line evaluates will be automatically returned. 
 The contents of the block should immediately follow the arrow => and the return keyword can be removed.
 This is referred to as implicit return.
   */
const sumNumbers = number => number +number;
const sumNumbersMukti = number => {
    const sum = number +number;
    return sum;
}

const squareNum = (num) => {
  return num * num;
};
//We can refactor the function to:

const squareNum = num => num * num;
/*
Notice the following changes:

The parentheses around num have been removed, since it has a single parameter.
The curly braces { } have been removed since the function consists of a single-line block.
The return keyword has been removed since the function consists of a single-line block.
*/

const plantNeedsWater = day => 
   day === 'Wednesday' ? true : false;