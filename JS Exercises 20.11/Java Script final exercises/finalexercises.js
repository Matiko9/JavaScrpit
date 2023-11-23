//exercises 1

function drawDiamond(size) {
    
    for (let i = 0; i < size; i++) {
        console.log(' '.repeat(size - i - 1) + '*'.repeat(2 * i + 1));
    }
    
    for (let i = size - 2; i >= 0; i--) {
        console.log(' '.repeat(size - i - 1) + '*'.repeat(2 * i + 1));
    }
}

function drawSquare(size) {
    for (let i = 0; i < size; i++) {
        console.log('*'.repeat(size));
    }
}

function drawTriangle(size) {
    for (let i = 1; i <= size; i++) {
        console.log('*'.repeat(i));
    }
}

function getUserInput(promptMsg) {
    while (true) {
        let value = prompt(promptMsg);
        if (!isNaN(value) && value > 0) {
            return parseInt(value);
        } else {
            alert("Please enter a valid positive number.");
        }
    }
}

function main() {
    let number = getUserInput("Enter a number:");

    console.log("Choose a geometrical figure:");
    console.log("1. Diamond");
    console.log("2. Square");
    console.log("3. Triangle");

    while (true) {
        let choice = prompt("Enter your choice (1/2/3):");

        if (choice === '1') {
            console.log(`Drawing a diamond of size ${number}:`);
            drawDiamond(number);
            break;
        } else if (choice === '2') {
            console.log(`Drawing a square of size ${number}:`);
            drawSquare(number);
            break;
        } else if (choice === '3') {
            console.log(`Drawing a triangle of size ${number}:`);
            drawTriangle(number);
            break;
        } else {
            alert("Please enter a valid choice (1/2/3).");
        }
    }
}

main();

//exercieses 2 

function drawEmptyDiamond(size) {
    
    for (let i = 0; i < size; i++) {
        if (i === 0 || i === size - 1) {
            console.log(' '.repeat(size - i - 1) + '*'.repeat(2 * i + 1));
        } else {
            console.log(' '.repeat(size - i - 1) + '*' + ' '.repeat(2 * i - 1) + '*');
        }
    }
    
    for (let i = size - 2; i > 0; i--) {
        console.log(' '.repeat(size - i - 1) + '*' + ' '.repeat(2 * i - 1) + '*');
    }
}

function drawEmptySquare(size) {
    for (let i = 0; i < size; i++) {
        if (i === 0 || i === size - 1) {
            console.log('*'.repeat(size));
        } else {
            console.log('*' + ' '.repeat(size - 2) + '*');
        }
    }
}

function drawEmptyTriangle(size) {
    for (let i = 0; i < size; i++) {
        if (i === size - 1) {
            console.log('*'.repeat(i * 2 + 1));
        } else if (i === 0) {
            console.log('*');
        } else {
            console.log('*' + ' '.repeat(i * 2 - 1) + '*');
        }
    }
}

function getUserInput(promptMsg) {
    while (true) {
        let value = prompt(promptMsg);
        if (!isNaN(value) && value > 0) {
            return parseInt(value);
        } else {
            alert("Please enter a valid positive number.");
        }
    }
}

function main() {
    let number = getUserInput("Enter a number:");

    console.log("Choose a geometrical figure:");
    console.log("1. Empty Diamond");
    console.log("2. Empty Square");
    console.log("3. Empty Triangle");

    while (true) {
        let choice = prompt("Enter your choice (1/2/3):");

        if (choice === '1') {
            console.log(`Drawing an empty diamond of size ${number}:`);
            drawEmptyDiamond(number);
            break;
        } else if (choice === '2') {
            console.log(`Drawing an empty square of size ${number}:`);
            drawEmptySquare(number);
            break;
        } else if (choice === '3') {
            console.log(`Drawing an empty triangle of size ${number}:`);
            drawEmptyTriangle(number);
            break;
        } else {
            alert("Please enter a valid choice (1/2/3).");
        }
    }
}

main();

//exercises 3

function factorialIterative(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}


function factorialRecursive(number) {
    if (number <= 1) {
        return 1;
    } else {
        return number * factorialRecursive(number - 1);
    }
}

function getUserInput(promptMsg) {
    while (true) {
        let value = prompt(promptMsg);
        if (!isNaN(value) && value >= 0) {
            return parseInt(value);
        } else {
            alert("Please enter a valid non-negative number.");
        }
    }
}

function main() {
    let number = getUserInput("Enter a number to calculate its factorial:");

    
    let factorialIter = factorialIterative(number);
    console.log(`Factorial of ${number} using iterative method: ${factorialIter}`);

   
    let factorialRec = factorialRecursive(number);
    console.log(`Factorial of ${number} using recursive method: ${factorialRec}`);
}

main();

//exercises 4


function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}


function calculateLotteryOdds(totalNumbers, chosenNumbers) {
    if (totalNumbers < chosenNumbers) {
        return 0; 
    }

    let numerator = factorial(totalNumbers);
    let denominator = factorial(chosenNumbers) * factorial(totalNumbers - chosenNumbers);
    return numerator / denominator;
}

function getUserInput(promptMsg) {
    while (true) {
        let value = prompt(promptMsg);
        if (!isNaN(value) && value > 0) {
            return parseInt(value);
        } else {
            alert("Please enter a valid positive number.");
        }
    }
}

function main() {
    let totalNumbers = getUserInput("Enter the total number of possible numbers in the lottery:");
    let chosenNumbers = getUserInput("Enter the number of numbers chosen in the lottery ticket:");

    let odds = calculateLotteryOdds(totalNumbers, chosenNumbers);
    console.log(`The odds of winning the lottery are approximately 1 in ${odds.toFixed(0)} chance.`);
}

main();

//exercises 5 


function calculateSumRecursive(number) {
    if (number === 1) {
        return 1;
    } else {
        return number + calculateSumRecursive(number - 1);
    }
}

function getUserInput(promptMsg) {
    while (true) {
        let value = prompt(promptMsg);
        if (!isNaN(value) && value > 0) {
            return parseInt(value);
        } else {
            alert("Please enter a valid positive number.");
        }
    }
}

function main() {
    let number = getUserInput("Enter a number to calculate the sum from 1 to that number recursively:");

    let sum = calculateSumRecursive(number);
    console.log(`The sum from 1 to ${number} is: ${sum}`);
}

main();


//exercises 6


function countDigitsRecursive(number) {
    if (number < 10) {
        return 1; 
    } else {
        return 1 + countDigitsRecursive(Math.floor(number / 10)); 
    }
}

function getUserInput(promptMsg) {
    while (true) {
        let value = prompt(promptMsg);
        if (!isNaN(value) && value >= 0) {
            return parseInt(value);
        } else {
            alert("Please enter a valid non-negative number.");
        }
    }
}

function main() {
    let number = getUserInput("Enter a number to calculate the number of digits:");

    let numDigits = countDigitsRecursive(number);
    console.log(`The number of digits in ${number} is: ${numDigits}`);
}

main();

//exercises 7

function reverseNumber(number) {
    let reversed = 0;
    while (number > 0) {
        let digit = number % 10;
        reversed = (reversed * 10) + digit;
        number = Math.floor(number / 10);
    }
    return reversed;
}

function getUserInput(promptMsg) {
    while (true) {
        let value = prompt(promptMsg);
        if (!isNaN(value) && Number.isInteger(parseFloat(value)) && value >= 0) {
            return parseInt(value);
        } else {
            alert("Please enter a valid non-negative integer number.");
        }
    }
}

function main() {
    let number = getUserInput("Enter a number to print it in reverse order:");

    let reversedNumber = reverseNumber(number);
    console.log(`The number ${number} in reverse order is: ${reversedNumber}`);
}

main();



