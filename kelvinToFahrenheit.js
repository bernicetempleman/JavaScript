//kelvin stays conatant
const kelvin = 273;

//celsius is 273 less
const celsius = kelvin- 273;

//Fahrenheit = Celsius * (9/5) + 32
const fahrenheit = Math.floor(celsius *(9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

/* if you’d like extra practice, try this:

Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console
*/