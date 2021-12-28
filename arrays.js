const hobbies = ["", "", ""];

console.log(hobbies);

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);// indefined (out of bounds)

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = "avocados";

/*
Variables declared with the const keyword cannot be reassigned.
 However, elements in an array declared with const remain mutable. 
 Meaning that we can change the contents of a const array, 
but cannot reassign a new array or a different value.
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = "Mayo";
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);

utensils[3]='Spoon';
console.log(utensils);
/*
One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings. 
Check the example below:
*/
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

/* .push() allows us to add items to the end of an array*/
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('clean');
chores.push('make bed');
console.log(chores);

/* .pop(), removes the last item of an array.*/

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];


//slice is non-mutating
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));

console.log(groceryList);

const pastaIndex =  groceryList.indexOf('pasta');
console.log(pastaIndex);

//arrays and functions
const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
/*
So when you pass an array into a function,
 if the array is mutated inside the function,
  that change will be maintained outside the function as well. 
  You might also see this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.
*/
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
newArr.pop();
}

removeElement(concept);
console.log(concept);

//Nested Arrays
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

const numberClusters = [[1,2], [3,4], [5,6]];

const target = numberClusters[2][1]; //6

/*
Review Arrays
Nice work! In this lesson, we learned these concepts regarding arrays:

Arrays are lists that store data in JavaScript.
Arrays are created with brackets [].
Each item inside of an array is at a numbered position, or index, starting at 0.
We can access one item in an array using its index, with syntax like: myArray[0].
We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
Arrays have a length property, which allows you to see how many items are in an array.
Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
Arrays mutated inside of a function will keep that change even outside the function.
Arrays can be nested inside other arrays.
To access elements in nested arrays chain indices using bracket notation.
*/