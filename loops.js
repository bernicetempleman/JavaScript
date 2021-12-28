
//print 5-10
for (let i = 5; i<= 10; i++){
    console.log(i);
  }
  
  // reverse
  for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

  const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i = 0; i < vacationSpots.length; i++)
{
  console.log('I would love to visit ' + vacationSpots[i]);
}

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};




const bobsFollowers = ['6', '19', '20', '5'];
const tinasFollowers = ['5', '20', '5'];
mutualFollowers = [];



for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {

    if(mutualFollowers.indexOf(tinasFollowers[j] ) < 0)
      mutualFollowers.push(tinasFollowers[j]);
      //console.log('Both loops have the number: ' + tinasFollowers[j]);
    
    }
  }
};

console.log(mutualFollowers);




// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
   
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }

  const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;

while (currentCard !== 'spade'){
currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
}
//at least once
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

onst firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};


// Write your code below
const cupsOfSugarNeeded = 1;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

//break
for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
       break;
    }
    console.log('Banana.');
  }
   
  console.log('Orange you glad I broke out the loop!');

  const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i =0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i]=== "Notorious B.I.G.")
  break;
}
console.log("And if you don't know, now you know.");