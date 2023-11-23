//exercises 1 

//regardless of the presence of 
//else, the function's behavior in the case of age checking will remain the same

//exercises 2 


//point a 

function checkAge(age) {
    return age > 18 ? true : confirm('Did your parents give you permission?');
}

//point b 

function checkAge(age) {
    return age > 18 || confirm('Did your parents give you permission?');
  }

  //exercises 3 

  function min(a, b) {
    return a < b ? a : b;
  }

  //exercises 4

  //Expression Function

  const min = function(a, b) {
    return a < b ? a : b;
  };

  //Arrow Function

  const min = (a, b) => (a < b ? a : b);

  //exercises 5

  //task in index.html
  
  //exercises 6 
  const pow = (x, n) => Math.pow(x, n);

const wynik = pow(5, 2); 
console.log(wynik); 

//exercises 7

const Pow = (x, n) => x ** n;

const result = pow(5, 2); 
console.log(result); 

//exercieses 8

const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  
  ask(
    "Do you agree?",
    () => { alert("Do you agree."); },
    () => { alert("You canceled the execution."); }
  );

  //exercises 9

  const calculateSupply = (age, amountPerDay, maxAge = 90) => {
    const amountNeeded = (maxAge - age) * 365 * amountPerDay;
    const message = `We will need ${amountNeeded} pieces of the product to be enough for you to reach your age ${maxAge}.`;
    console.log(message);
  };
  
 
  calculateSupply(30, 2); 
  
  





