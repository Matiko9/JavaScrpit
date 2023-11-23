//exercises 1


let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));


let sumResult = num1 + num2;


console.log(`The sum of ${num1} and ${num2} is: ${sumResult}`);

//exercises 2 
//to round correctly


let number = 6.35;
let roundedNumber = Math.round(number * 10) / 10; 
console.log(roundedNumber);

//exercises 3

function readNumber() {
    let userInput;
    
    do {
      userInput = prompt('Please enter a number:');
      
      if (userInput === null || userInput === '') {
        return null; // Return null if the user cancels or enters an empty line
      }
      
      userInput = Number(userInput);
    } while (isNaN(userInput)); // Continue prompting until a valid number is entered
    
    return userInput;
  }
  
  // Example usage:
  let enteredNumber = readNumber();
  
  if (enteredNumber !== null) {
    console.log('Entered number:', enteredNumber);
  } else {
    console.log('User canceled or entered an empty line.');
  }

  //exercises 4

  //the loop will never end because i will never become exactly equal to 10. Instead, the value o
  //f i will continually increase, but due to a precision problem with floating-point arithmetic, 
  //it will never reach the exact value of 10.

  //exercises 5 

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  
  let minValue = 5;
  let maxValue = 10;
  
  let randomNumber = random(minValue, maxValue);
  console.log(`Random number between ${minValue} and ${maxValue}:`, randomNumber);

  //exercises 6

  function randomInteger(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  let minValue = 5;
  let maxValue = 10;
  
  let randomInt = randomInteger(minValue, maxValue);
  console.log(`Random integer between ${minValue} and ${maxValue}:`, randomInt);
  
  