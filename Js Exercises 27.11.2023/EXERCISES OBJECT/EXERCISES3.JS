function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  let obj = {
    num1: 10,
    num2: 20,
    str: 'hello',
    num3: 30
  };
  
  console.log('Before multiplication:', obj);
  multiplyNumeric(obj);
  console.log('After multiplication:', obj);