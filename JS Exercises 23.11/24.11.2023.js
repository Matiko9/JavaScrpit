//exercises 1

function camelize(str) {
    return str.split('-').map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  }

  
  //exercises 2

  function filterRange(arr, a, b) {
    return arr.filter(element => element >= a && element <= b);
  }

  let tablica = [2, 5, 8, 12, 15];
let dolnyLimit = 5;
let górnyLimit = 12;

let przefiltrowanaTablica = filterRange(tablica, dolnyLimit, górnyLimit);
console.log(przefiltrowanaTablica);


//exercises 3

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  
  let tablica = [2, 5, 8, 12, 15];
let dolnyLimit = 5;
let górnyLimit = 12;

filterRangeInPlace(tablica, dolnyLimit, górnyLimit);
console.log(tablica);

//exercieses 4

let arr = [5, 2, 9, 1, 5, 6];
arr.sort((a, b) => b - a);
console.log(arr); 

//exercises 5

function copySorted(arr) {
    const sortedArray = arr.slice().sort();
  
    return sortedArray;
  }

  let originalArray = ["banana", "apple", "orange", "grape"];
let sortedCopy = copySorted(originalArray);

console.log(originalArray);
console.log(sortedCopy);

//exercises 6

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
 let namesArray = users.map(user => user.name);
console.log(namesArray);

//exercises 7

let users = [
    { name: "Alice", surname: "Smith", id: 1 },
    { name: "Bob", surname: "Johnson", id: 2 },
    { name: "Charlie", surname: "Williams", id: 3 }
  ];
  
  let modifiedUsers = users.map(user => ({
    id: user.id,
    fullName: `${user.name} ${user.surname}`
  }));
  
  console.log(modifiedUsers);

  //exercises 8

  function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
    return users;
  }

  let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
  ];
  
  let sortedByAge = sortByAge(users);
  console.log(sortedByAge);

  //exercises 9

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {  
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  let arr = [1, 2, 3, 4, 5];
console.log(shuffle(arr));

//exercises 10

function getAverageAge(users) {
    if (users.length === 0) {
      return 0; 
    }
    const sumOfAges = users.reduce((total, user) => total + user.age, 0); 
    const averageAge = sumOfAges / users.length;
    return averageAge;
  }
  let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
  
  console.log(getAverageAge(users)); 


   
  


  

  
  
  

  



  