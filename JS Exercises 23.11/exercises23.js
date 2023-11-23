//exercises 1

//code show 4

//exercises 2

let styles = ["Jazz", "Blues"];
// b) 
styles.push("Rock-n-Roll");
// c)
if (styles.length % 2 !== 0) {
    let middleIndex = Math.floor(styles.length / 2);
    styles[middleIndex] = "Classics";
}
// d)
let firstItem = styles.shift();
console.log("Usunięty element:", firstItem);
// e)
styles.unshift("Rap", "Reggae");
console.log("Ostateczna tablica:", styles);

//exercises 3

//The function displays an object window

//exercises 4

function sumInput() {
    let values = [];
    let input;

    while (true) {
        input = prompt('Podaj liczbę:');

        if (input === '' || input === null || !isFinite(input)) {
            break;
        }

        values.push(+input);
    }

    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum;
}

let result = sumInput();
console.log('Suma wprowadzonych liczb to: ' + result);

//exercises 5

function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(0, currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Test cases
console.log(getMaxSubSum([-1, 2, 3, -9]));   
console.log(getMaxSubSum([2, -1, 2, 3, -9]));  
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));   
console.log(getMaxSubSum([-2, -1, 1, 2]));   
console.log(getMaxSubSum([100, -9, 2, -3, 5]));   
console.log(getMaxSubSum([1, 2, 3]));  

 
