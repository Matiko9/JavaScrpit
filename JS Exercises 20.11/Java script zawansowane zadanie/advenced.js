//exercises 1

function power(base, exponent) {
    
    if (exponent === 0) {
        return 1;
    }
    else if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    else if (exponent % 2 === 0) {
        const result = power(base, exponent / 2);
        return result * result;
    }
    else {
        return base * power(base, exponent - 1);
    }
}


const base = 2;
const exponent = 5;
console.log(`Result: ${power(base, exponent)}`); 

//exerccises 2

function concatenateWords(...words) {
    return words.join(' ');
}

const result = concatenateWords('This', 'is', 'an', 'example', 'of', 'concatenating', 'words');
console.log(result); 

//exercises 3 

function applyOperation(number1, number2, operation) {
    if (operation === 'division') {
        if (number2 === 0) {
            return 'Cannot divide by zero.';
        }
        return number1 / number2;
    } else if (operation === 'pow') {
        return Math.pow(number1, number2);
    } else {
        return 'Invalid operation.';
    }
}


const resultDivision = applyOperation(10, 2, 'division');
console.log('Division result:', resultDivision); 

const resultPow = applyOperation(3, 4, 'pow');
console.log('Power result:', resultPow); 

//exercises 4

//The result of the code will be: 100

//exercises 5 

//nombre is not defined anywhere 
//in the code, this will result in a ReferenceError because nombre is not defined.

//exercises 6

//after calling console.log(coche1()); we will 
//get "tesla" as result and after calling console.log(coche2()); we will get "mg" as result.

//exercises 7 

//1 The if condition appears to contain incorrect syntax. The if condition (animal1 == conejo) should be if (animal == "conejo") 
//to check whether the value of the animal variable is equal to the string "conejo".

//2 There is an incompatibility in the use of backticks or regular quotes in strings, 
//which can cause problems. Use regular quotation 
//marks (" or ') to represent strings in JavaScript

//3Additionally, the habla() function call is outside
//scope where the habla function is defined, so this will result in a ReferenceError.

//corrected code

let animal = "gato";
if (1) {
    let animal = "conejo";
    function habla() {
        if (animal == "conejo") {
            console.log("Los conejos no hacen ruido");
        } else {
            console.log("Los gatos maúllan");
        }
    }
    habla(); 
}


