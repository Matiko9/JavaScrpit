let fruits = {
    name: '',
    kg: 0,
    sell() {
    },
    buy() {

    },
    outOfStockDate() {
      console.log('Out of stock date: N/A');
    },
    buyingDate() {
      console.log('Buying date: N/A');
    }
  };
  
  fruits.name = 'Apple';
  fruits.kg = 5;
  fruits.sell(); 
  fruits.buy(); 
  fruits.outOfStockDate(); 
  fruits.buyingDate();
  