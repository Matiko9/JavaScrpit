function getTotalKgPerFruit(frutas) {
    let fruitTotals = {};
  
    for (let fruit in frutas) {
      let fruitName = fruit.split(" ")[0];
  
      if (fruitTotals[fruitName]) {
        fruitTotals[fruitName] += frutas[fruit];
      } else {
        fruitTotals[fruitName] = frutas[fruit];
      }
    }
  
    return fruitTotals;
  }
  
  let frutas = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  };
  const totalKgPerFruit = getTotalKgPerFruit(frutas);
  console.log("Total kg per fruit:", totalKgPerFruit);
  