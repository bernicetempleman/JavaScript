/*
Higher-order functions are functions that accept other functions as
 arguments and/or return functions as output. 
 This enables us to build abstractions on other abstractions,
  just like “We hosted a birthday party” is an abstraction that may build
   on the abstraction “We made a cake.”

In summary, using more abstraction in our code allows us to write more
 modular code which is easier to read and debug.

 JavaScript functions behave like any other data type in the language; 
 we can assign functions to variables,
  and we can reassign them to new variables.
  Notice how we assign announceThatIAmDoingImportantWork 
  without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

In JavaScript, functions are first class objects. 
This means that, like other objects you’ve encountered,
 JavaScript functions can have properties and methods.

Since functions are a type of object, 
they have properties such as .length and .name and methods such as .toString().

Functions are special because we can invoke them, 
but we can still treat them like any other type of data
*/
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!


//
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  // Write your code below
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  is2p2();
  console.log(is2p2.name );

  /*
When we pass a function in as an argument to another function, we don’t invoke it. Invoking the function would evaluate to the return value of that function call. With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function):

const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}
 
const addOneToOne = () => 1 + 1;
 
timeFuncRuntime(addOneToOne);

This higher-order function could be used with any callback function which makes it a potentially powerful piece of code.

We then invoked timeFuncRuntime() first with the addOneToOne() function - note how we passed in addOneToOne and did not invoke it.

timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});

In this example, we invoked timeFuncRuntime() with an anonymous function that counts backwards from 10. 
Anonymous functions can be arguments too!
  */
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
  const checkConsistentOutput = (func, val) => {
      let firstTry = func(val);
      let secondTry = func(val);
      if (firstTry === secondTry) {
          return firstTry;
      } else {
          return 'This function returned inconsistent results';
      }
  };
  
  checkConsistentOutput(addTwo, 2);