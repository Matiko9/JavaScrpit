let calculator = {
    read() {
      this.a = parseFloat(prompt('Podaj pierwszą wartość:', ''));
      this.b = parseFloat(prompt('Podaj drugą wartość:', ''));
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read(); 
  console.log('Suma:', calculator.sum()); 
  console.log('Iloczyn:', calculator.mul()); 
  