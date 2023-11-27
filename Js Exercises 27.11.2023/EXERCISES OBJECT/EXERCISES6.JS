//solution 1 

function getTotalKgUsingObjectValues(frutas) {
    let total = 0;
    const values = Object.values(frutas);
  
    for (let kg of values) {
      total += kg;
    }
  
    return total;
  }
  let frutas = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  };
  const totalKg1 = getTotalKgUsingObjectValues(frutas);
  console.log("Całkowita ilość kilogramów (metoda Object.values()):", totalKg1);

  //solution 2

  function getTotalKgUsingForOf(Frutas) {
    let total = 0;
  
    for (let kg of Object.values(Frutas)) {
      total += kg;
    }
  
    return total;
  }
  
  let Frutas = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  };
  
  const totalKg2 = getTotalKgUsingForOf(Frutas);
  console.log("Całkowita ilość kilogramów (pętla for...of):", totalKg2);
  
  